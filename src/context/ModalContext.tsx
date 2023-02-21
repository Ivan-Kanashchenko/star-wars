import React, { FC, createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

const ModalProvider: FC = ({ children }) => {
  const [isOpenFeedback, setIsOpenFeedback] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ isOpenFeedback, setIsOpenFeedback }}>
      {children}
    </ModalContext.Provider>
  );
};

export interface ContextType {
  isOpenFeedback: boolean;
  setIsOpenFeedback: (arg: boolean) => void;
}

export const useModal = () => {
  const context = useContext<ContextType>(ModalContext);

  if (context === undefined) {
    throw new Error("useModal: context undefined");
  }
  return context;
};

export default ModalProvider;
