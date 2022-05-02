import * as React from "react";
import StyledChat from "./styles";
import { useState } from "react";
import { ChatHeader } from "./ChatHeader/ChatHeader";
import { useAuth } from "../../auth/AuthContext";
export const Chat = () => {
  const [openChat, setOpenChat] = useState(false);

  const { isAuth } = useAuth();

  const chatToggle = () => {
    setOpenChat(!openChat);
  };

  if (!isAuth) {
    return null;
  }

  return (
    <>
      {openChat ? (
        <StyledChat.Window openChat={openChat}>
          <ChatHeader chatToggle={chatToggle} />
          <StyledChat.Screen></StyledChat.Screen>
          <StyledChat.SendMessageContainer>
            <StyledChat.TextArea />
            <StyledChat.SendButton />
          </StyledChat.SendMessageContainer>
        </StyledChat.Window>
      ) : (
        <StyledChat.Icon onClick={chatToggle} />
      )}
    </>
  );
};
