import React, { FC, useRef, useEffect } from "react";
import { DocumentData } from "firebase/firestore";

import { useAuth } from "auth/AuthContext";
import { dateCreator } from "helpers";

import { Styled } from "./styles";

export const ChatWindow: FC<{ messagesList: DocumentData[] }> = ({
  messagesList,
}) => {
  const { userId } = useAuth();

  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messagesList]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Styled.Container>
      {messagesList.map((message) => (
        <Styled.Message key={message.userId} owner={message.userId === userId}>
          {message?.username && (
            <Styled.MessageAuthor owner={message.userId === userId}>
              {message?.username}
            </Styled.MessageAuthor>
          )}
          {message?.text && (
            <Styled.MessageText owner={message.userId === userId}>
              {message?.text}
            </Styled.MessageText>
          )}
          {message?.createdAt && (
            <Styled.MessageDate owner={message.userId === userId}>
              {dateCreator(message?.createdAt)}
            </Styled.MessageDate>
          )}
        </Styled.Message>
      ))}
      <Styled.WrapperScrollBottom ref={messagesEndRef} />
    </Styled.Container>
  );
};
