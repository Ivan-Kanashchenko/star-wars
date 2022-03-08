import * as React from "react";
import StyledChat from "../styles";
import { FC } from "react";
import StyledElement from "../../StyledComponents/Elements/Elements";

type ChatProps = {
  chatToggle: () => void;
};

export const ChatHeader: FC<ChatProps> = ({ chatToggle }) => {
  return (
    <>
      <StyledChat.Header>
        <StyledElement.H4>Chat</StyledElement.H4>
        <StyledChat.CloseButton onClick={chatToggle} />
      </StyledChat.Header>
    </>
  );
};
