import { useContext, useState } from "react";
import * as React from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  signOut,
  FacebookAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyA_m0pYQi0wC2RjjypxZ6JjMs2hBHjjT4Y",
  authDomain: "react-chat-15b5a.firebaseapp.com",
  projectId: "react-chat-15b5a",
  storageBucket: "react-chat-15b5a.appspot.com",
  messagingSenderId: "405726454771",
  appId: "1:405726454771:web:cf11ac8487d238100f6886",
  measurementId: "G-VB6Y2FDM0J",
});

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPhoto, setUserPhoto] = useState<string>("");

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const auth = getAuth();

  const Login = async (user: User) => {
    setUserName(user.displayName);
    setUserEmail(user.email);
    setUserPhoto(user.photoURL);
    setIsAuth(true);
  };

  const googleAuth = async (): Promise<void> => {
    const { user } = await signInWithPopup(auth, googleProvider);
    Login(user);
  };

  const facebookAuth = async (): Promise<void> => {
    const { user } = await signInWithPopup(auth, facebookProvider);
    Login(user);
  };
  const gitHubAuth = async (): Promise<void> => {
    const { user } = await signInWithPopup(auth, gitHubProvider);
    Login(user);
  };

  const emailAuth = async (email: string, password: string): Promise<void> => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    Login(user);
  };

  const emailRegistration = async (
    email: string,
    password: string,
    displayName: string
  ): Promise<void> => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    Login(user);
  };

  const Logout = () => {
    signOut(auth);
    setUserName("");
    setUserEmail("");
    setUserPhoto("");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        facebookAuth,
        googleAuth,
        gitHubAuth,
        Logout,
        isAuth,
        userName,
        userEmail,
        userPhoto,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export type ContextType = {
  facebookAuth: () => void;
  googleAuth: () => void;
  gitHubAuth: () => void;
  Logout: () => void;
  isAuth: boolean;
  userName: string;
  userEmail: string;
  userPhoto: string;
};

export const useAuth = () => {
  const context = useContext<ContextType>(AuthContext);

  if (context === undefined) {
    throw new ReferenceError("useAuth inside its provider.");
  }
  return context;
};

export default AuthProvider;
