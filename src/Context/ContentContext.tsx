import { useContext, useState } from "react";
import * as React from "react";

const ContentContext = React.createContext(null);

const ContentProvider = ({ children }) => {
  const [content, setContent] = useState<string>("description");

  const contentHandler = (state: string) => {
    setContent(state);
  };

  return (
    <ContentContext.Provider value={{ content, contentHandler }}>
      {children}
    </ContentContext.Provider>
  );
};

export type ContextType = {
  content: string;
  contentHandler: (arg0: string) => void;
};

export const useContent = () => {
  const context = useContext<ContextType>(ContentContext);

  if (context === undefined) {
    throw new ReferenceError("useContent inside its provider.");
  }
  return context;
};

export default ContentProvider;
