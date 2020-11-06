import { db } from "./firebaseServices.js";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase";
// import { OK } from '../constants'

function checkIfRoomExists(roomName) {
  return db
    .collection("rooms")
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
    .collection("rooms")
    .doc(roomName)
    .set({
      id: roomId,
      name: roomName,
      password: roomPassword,
      owner: roomOwner,
      ownerId: roomOwnerId,
      players: [],
    });
}

async function joinRoom(roomName, roomPassword, playerNickname) {
  const roomExists = await checkIfRoomExists(roomName);

  if (!roomExists) {
    throw Error("Bad Password");
  }

  const checkConnexion = await db
    .collection("rooms")
    .where("name", "==", roomName)
    .where("password", "==", roomPassword)
    .get();

  if (checkConnexion.empty) {
    throw Error("Bad Room Name");
  }

  checkConnexion.forEach((doc) => {
    const playersArray = doc.data().players;

    for (const player of playersArray) {
      if (player.playerNickname === playerNickname) {
        throw Error("Nickname already used");
      }
    }
  });

  const player = { playerNickname: playerNickname, playerId: uuidv4() };

  await db
    .collection("rooms")
    .doc(roomName)
    .update({
      players: firebase.firestore.FieldValue.arrayUnion(player),
    });
}
export { createRoom, checkIfRoomExists, joinRoom };
