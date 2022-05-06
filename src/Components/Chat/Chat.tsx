import * as React from "react";
import { useState } from "react";
import { ChatHeader } from "./ChatHeader/ChatHeader";
import { useAuth } from "../../auth/AuthContext";
import { ChatForm } from "../Forms";
import { ChatWindow } from "./ChatWindow/ChatWindow";
import { useChat } from "../../chat/useChat";
import { Styled } from "./styles";

export const Chat = () => {
  const { userId } = useAuth();
  const { messagesList } = useChat();

  const [openChat, setOpenChat] = useState(false);

  const chatToggle = () => {
    setOpenChat(!openChat);
  };

  if (!userId) {
    return null;
  }

  return (
    <>
      {openChat ? (
        <Styled.Window openChat={openChat}>
          <ChatHeader chatToggle={chatToggle} />
          <Styled.Screen>
            <ChatWindow messagesList={messagesList} />
            <ChatForm />
          </Styled.Screen>
        </Styled.Window>
      ) : (
        <Styled.Icon onClick={chatToggle} />
      )}
    </>
  );
};
