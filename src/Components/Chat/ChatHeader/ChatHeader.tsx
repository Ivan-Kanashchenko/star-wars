import * as React from "react";
import { Styled } from "./styles";
import { FC } from "react";
import { StyledElement } from "../../StyledComponents/Elements/Elements";

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
