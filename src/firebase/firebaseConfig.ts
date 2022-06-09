import { config } from "./../config/config";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Initialize Firebase
export const app = initializeApp(config);
export const db = getFirestore(app);
