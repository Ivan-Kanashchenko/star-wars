import React, { useContext, useState } from "react";

const ContentContext = React.createContext();

const ContentProvider = ({ children }) => {
  const [content, setContent] = useState("description");

  const contentHandler = (state) => {
    setContent(state);
  };

  return (
    <ContentContext.Provider value={{ content, contentHandler }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);

  if (context === undefined) {
    throw new ReferenceError("useContent inside its provider.");
  }

  return context;
};

export default ContentProvider;
