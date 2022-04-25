import { useContext, useState } from "react";
import * as React from "react";
import { useAuth } from "../../auth/AuthContext";

const ModalContext = React.createContext(null);

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState<boolean>(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <ModalContext.Provider value={{ modal, modalHandler }}>
      {children}
    </ModalContext.Provider>
  );
};

export type ContextType = {
  modal: boolean;
  modalHandler: () => void;
};

export const useModal = () => {
  const context = useContext<ContextType>(ModalContext);

  if (context === undefined) {
    throw new ReferenceError("useModal inside its provider.");
  }
  return context;
};

export default ModalProvider;
