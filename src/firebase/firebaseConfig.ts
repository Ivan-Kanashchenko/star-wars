import { config } from "./../config/config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
export const app = initializeApp(config);
export const db = getFirestore(app);
