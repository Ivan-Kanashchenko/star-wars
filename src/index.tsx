import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

//video------------
// import firebase from 'firebase';
// import "firebase/firestore";
// import "firebase/auth";

//docs--------------
// Initialize Firebase
// const app = initializeApp({
//   apiKey: "AIzaSyA_m0pYQi0wC2RjjypxZ6JjMs2hBHjjT4Y",
//   authDomain: "react-chat-15b5a.firebaseapp.com",
//   projectId: "react-chat-15b5a",
//   storageBucket: "react-chat-15b5a.appspot.com",
//   messagingSenderId: "405726454771",
//   appId: "1:405726454771:web:cf11ac8487d238100f6886",
//   measurementId: "G-VB6Y2FDM0J",
// });
// const analytics = getAnalytics(app);

// const provider = new GoogleAuthProvider();

// const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA_m0pYQi0wC2RjjypxZ6JjMs2hBHjjT4Y",
//   authDomain: "react-chat-15b5a.firebaseapp.com",
//   projectId: "react-chat-15b5a",
//   storageBucket: "react-chat-15b5a.appspot.com",
//   messagingSenderId: "405726454771",
//   appId: "1:405726454771:web:cf11ac8487d238100f6886",
//   measurementId: "G-VB6Y2FDM0J",
// };

//video----------------
// Initialize Firebase
// const app = initializeApp({
//   apiKey: "AIzaSyA_m0pYQi0wC2RjjypxZ6JjMs2hBHjjT4Y",
//   authDomain: "react-chat-15b5a.firebaseapp.com",
//   projectId: "react-chat-15b5a",
//   storageBucket: "react-chat-15b5a.appspot.com",
//   messagingSenderId: "405726454771",
//   appId: "1:405726454771:web:cf11ac8487d238100f6886",
//   measurementId: "G-VB6Y2FDM0J",
// });
// const analytics = getAnalytics(app);

//video
// const auth = firebase.auth()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
