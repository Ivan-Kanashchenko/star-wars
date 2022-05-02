import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { app } from "../auth/AuthContext";

const db = getFirestore(app);

export const sendMessage = async ({
  userName,
  message,
}: {
  userName: string;
  message: string;
}) => {
  try {
    await addDoc(collection(db, "messages"), {
      userName: userName,
      message: message,
    });
  } catch (error) {
    throw new Error(`Error with sending message ${error}`);
  }
};

export const getMessages = async () => {
  const unsub = onSnapshot(doc(db, "messages", "SF"), (doc) => {
    console.log("Current data: ", doc.data());
  });
};
