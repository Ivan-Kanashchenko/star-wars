import { useAuth } from "./../auth/AuthContext";
import { db } from "../firebase/firebaseConfig";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  collectionGroup,
  where,
  orderBy,
  DocumentData,
  onSnapshot,
} from "firebase/firestore";

export type MessageListType = {
  createdAt: any;
  text: string;
  type: string;
  username: string;
  userId: string;
};

export const useChat = () => {
  const { userId, userName } = useAuth();

  const [messagesList, setMessagesList] = useState<DocumentData[]>([]);

  useEffect(() => {
    const q = query(
      collectionGroup(db, "message"),
      where("type", "==", "chat_message"),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = querySnapshot.docs.map((message) => message.data());
      setMessagesList(messages);
    });
    return unsubscribe;
  }, []);

  const sendMessage = async (message: string) => {
    const messagessRef = collection(db, "chat");
    await addDoc(collection(messagessRef, "messages", "message"), {
      username: userName,
      userId: userId,
      text: message,
      type: "chat_message",
      createdAt: serverTimestamp(),
    });
  };

  return { messagesList, sendMessage };
};
