import styled from "styled-components";
import chatIcon from "../../assets/chat/chat.png";
import closeIconGray from "../../assets/chat/close.png";
import closeIconRed from "../../assets/chat/closeRed.png";
import sendMessageGray from "../../assets/chat/sendMessage.png";
import sendMessageYellow from "../../assets/chat/sendMessageYellow.png";

const Icon = styled.div`
  transition: 0.4s;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 10;
  background-image: url(${chatIcon});
  background-repeat: no-repeat;
  background-size: contain;
  width: 50px;
  height: 50px;
  &:hover {
    width: 60px;
    height: 60px;
  }
`;

interface WindowProps {
  openChat: boolean;
}
const Window = styled.div<WindowProps>`
  display: flex;
  flex-direction: column;
  transition: 0.4s;
  opacity: 0;
  background-color: var(--primary1);
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 10;
  width: 0px;
  height: 0px;
  border-radius: 20px;
  border: 1px solid var(--primary3);
  padding: 7px;

  @keyframes show {
    from {
      opacity: 0;
      width: 0px;
      height: 0px;
    }
    to {
      opacity: 1;
      width: 300px;
      height: 500px;
    }
  }

  ${({ openChat }) =>
    openChat &&
    `width: 300px;
      height: 500px; opacity: 1;
    animation: 0.5s show ease;`}
`;

const Header = styled.div`
  color: var(--primary3);
  padding-bottom: 7px;
  width: 100%;
  font-size: 16px;
  position: relative;
`;

const CloseButton = styled.button`
  display: block;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 20px;
  height: 20px;
  background-image: url(${closeIconGray});
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  border: 1px solid var(--primary3);
  &:hover {
    background-image: url(${closeIconRed});
    -webkit-box-shadow: 0px 0px 13px 2px var(--accent1);
    box-shadow: 0px 0px 13px 2px var(--accent1);
    border-color: var(--accent1);
  }
`;

const Screen = styled.div`
  display: flex;
  flex-grow: 1;
  border: 1px solid var(--primary3);
  background-color: var(--primary2);
`;

const SendMessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0px;
  align-items: center;
`;

const TextArea = styled.textarea`
  color: var(--primary3);
  margin: 0px 8px 0px 0px;
  display: block;
  width: 100%;
  border: 1px solid var(--primary3);
  background-color: var(--primary2);

  outline: none;
  -moz-appearance: none;
  resize: none;
`;

const SendButton = styled.button`
  width: 25px;
  height: 25px;
  background-image: url(${sendMessageGray});
  background-repeat: no-repeat;
  background-size: contain;

  &:hover {
    background-image: url(${sendMessageYellow});
  }
`;

const StyledChat = {
  Icon,
  Window,
  Header,
  CloseButton,
  SendButton,
  Screen,
  TextArea,
  SendMessageContainer,
};

export default StyledChat;
