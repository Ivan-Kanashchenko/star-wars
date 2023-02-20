import * as React from "react";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useContext, useState } from "react";

const AuthContext = React.createContext(null);

const AuthProvider: React.FC = ({ children }) => {
  const [userName, setUserName] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPhoto, setUserPhoto] = useState<string>("");

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const auth = getAuth();

  const Login = async (user: User) => {
    setUserName(user.displayName || null);
    setUserId(user.uid);
    setUserEmail(user.email);
    setUserPhoto(user.photoURL || null);
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
      const response = await signInWithPopup(auth, facebookProvider);

      Login(response.user);
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
    password: string
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
    setUserId("");
    setUserEmail("");
    setUserPhoto("");
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
        userId,
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
  userId: string;
  userName: string;
  userEmail: string;
  userPhoto: string;
}

export const useAuth = () => {
  const context = useContext<ContextType>(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth: context undefined");
  }
  return context;
};

export default AuthProvider;
