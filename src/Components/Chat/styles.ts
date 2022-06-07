import chatIcon from "../../assets/chat/chat.png";
import styled from "styled-components";

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

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid var(--primary3);
  background-color: var(--primary2);
  overflow: auto;
  border-radius: 5px 5px 15px 15px;
`;

const Window = styled.div<{ openChat?: boolean }>`
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

export const Styled = {
  Icon,
  Window,
  Screen,
};
