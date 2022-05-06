import styled from "styled-components";
import closeIconGray from "../../../assets/chat/close.png";
import closeIconRed from "../../../assets/chat/closeRed.png";

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

export const Styled = {
  Header,
  CloseButton,
};
