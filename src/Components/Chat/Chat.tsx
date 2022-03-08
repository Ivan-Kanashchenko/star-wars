import * as React from "react";
import StyledChat from "./styles";
import { useState } from "react";
import { ChatHeader } from "./ChatHeader/ChatHeader";

{
  /* <StyledChat.Icon />
      <StyledChat.Window /> */
}

export const Chat = () => {
  const [openChat, setOpenChat] = useState(false);

  const chatToggle = () => {
    setOpenChat(!openChat);
  };

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
