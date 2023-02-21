import React, { FC } from "react";

import { StyledElement } from "ui";

import { Styled } from "./styles";

interface ChatProps {
  chatToggle: () => void;
}

export const ChatHeader: FC<ChatProps> = ({ chatToggle }) => {
  return (
    <Styled.Header>
      <StyledElement.H4>Chat</StyledElement.H4>
      <Styled.CloseButton onClick={chatToggle} />
    </Styled.Header>
  );
};
