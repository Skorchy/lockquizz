import { db } from "./firebaseServices.js";
import { v4 as uuidv4 } from "uuid";

function checkIfRoomExists(roomName) {
  return db
    .collection("rooms")
    .doc(roomName)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return true;
      }
      return false;
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

export { createRoom, checkIfRoomExists };
