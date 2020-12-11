import { db } from './firebaseServices.js';
import { v4 as uuidv4 } from 'uuid';

function checkIfRoomExists(roomName) {
  return db
    .collection('rooms')
    .doc(roomName)
    .get()
    .then((doc) => {
      return doc.exists;
    });
}

function createRoom(roomName, roomPassword, roomOwner) {
  const roomId = uuidv4();
  const roomOwnerId = uuidv4();
  return db
    .collection('rooms')
    .doc(roomName)
    .set({
      modal: {
        openModal: false,
        modalType: '',
      },
      gameInitiated: false,
      gameInitializationFinished: false,
      gameStarted: false,
      id: roomId,
      name: roomName,
      password: roomPassword,
      owner: roomOwner,
      ownerId: roomOwnerId,
      players: {},
      questions: [],
      answers: [],
    });
}

async function joinRoom(roomName, roomPassword, playerNickname) {
  const roomExists = await checkIfRoomExists(roomName);

  if (!roomExists) {
    throw Error('Bad Password');
  }

  const checkConnexion = await db
    .collection('rooms')
    .where('name', '==', roomName)
    .where('password', '==', roomPassword)
    .get();

  if (checkConnexion.empty) {
    throw Error('Bad Room Name');
  }

  checkConnexion.forEach((doc) => {
    const players = doc.data().players;

    for (const player in players) {
      if (player.playerNickname === playerNickname) {
        throw Error('Nickname already used');
      }
    }
  });

  const player = {
    playerNickname: playerNickname,
    playerIsReady: false,
  };

  const playerKey = `players.${player.playerNickname}`;

  await db
    .collection('rooms')
    .doc(roomName)
    .update({
      [playerKey]: player,
    });
}
export { createRoom, checkIfRoomExists, joinRoom };
