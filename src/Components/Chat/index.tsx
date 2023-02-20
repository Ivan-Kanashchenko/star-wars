import React, { useState } from "react";
import { ChatForm } from "../Forms";

import { useAuth } from "../../auth/AuthContext";
import { useChat } from "../../customHooks/useChat";
import { ChatHeader, ChatWindow } from "./components";
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

  if (!openChat) {
    return <Styled.Icon onClick={chatToggle} />;
  }

  return (
    <Styled.Window openChat={openChat}>
      <ChatHeader chatToggle={chatToggle} />
      <Styled.Screen>
        <ChatWindow messagesList={messagesList} />
        <ChatForm />
      </Styled.Screen>
    </Styled.Window>
  );
};
