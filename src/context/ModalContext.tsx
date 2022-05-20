import * as React from "react";

const ModalContext = React.createContext(null);

const ModalProvider: React.FC = ({ children }) => {
  const [isOpenFeedback, setIsOpenFeedback] = React.useState<boolean>(false);

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
  const context = React.useContext<ContextType>(ModalContext);

  if (context === undefined) {
    throw new Error("useModal: context undefined");
  }
  return context;
};

export default ModalProvider;
