import { useContext, useState } from "react";
import * as React from "react";
import { initializeApp } from "firebase/app";
import { config } from "../config/config";
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
export const app = initializeApp(config);

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
    setUserName(user.displayName || null);
    setUserEmail(user.email);
    setUserPhoto(user.photoURL || null);
    setIsAuth(true);
  };

  const googleAuth = async (): Promise<void> => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      Login(user);
    } catch (error) {
      throw new Error(
        `Error in googleAuth. errorCode: ${error.code}, errorMessage: ${error.message}, errorEmail: ${error.email}`
      );
    }
  };

  const facebookAuth = async (): Promise<void> => {
    try {
      const { user } = await signInWithPopup(auth, facebookProvider);
      Login(user);
    } catch (error) {
      throw new Error(
        `Error in facebookAuth. errorCode: ${error.code}, errorMessage: ${error.message}, errorEmail: ${error.email}`
      );
    }
  };

  const gitHubAuth = async (): Promise<void> => {
    try {
      const { user } = await signInWithPopup(auth, gitHubProvider);
      Login(user);
    } catch (error) {
      throw new Error(
        `Error in gitHubAuth. errorCode: ${error.code}, errorMessage: ${error.message}, errorEmail: ${error.email}`
      );
    }
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
        emailRegistration,
        emailAuth,
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

export interface ContextType {
  emailRegistration: (
    email: string,
    password: string,
    displayName: string
  ) => void;
  emailAuth: (email: string, password: string) => void;
  facebookAuth: () => void;
  googleAuth: () => void;
  gitHubAuth: () => void;
  Logout: () => void;
  isAuth: boolean;
  userName: string;
  userEmail: string;
  userPhoto: string;
}

export const useAuth = () => {
  const context = useContext<ContextType>(AuthContext);

  if (context === undefined) {
    try {
      throw new ReferenceError("useAuth in AuthContext have Error:");
    } catch (e) {
      console.log(e.message);
    }
  }
  return context;
};

export default AuthProvider;
