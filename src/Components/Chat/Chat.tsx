import * as React from "react";
import { ChatForm } from "../Forms";
import { ChatHeader } from "./ChatHeader/ChatHeader";
import { ChatWindow } from "./ChatWindow/ChatWindow";
import { Styled } from "./styles";
import { useAuth } from "../../auth/AuthContext";
import { useChat } from "../../chat/useChat";

export const Chat = () => {
  const { userId } = useAuth();
  const { messagesList } = useChat();

  const [openChat, setOpenChat] = React.useState(false);

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
