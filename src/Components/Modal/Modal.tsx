import * as React from "react";
import { Styled } from "./styles";
import { StyledElement } from "../StyledComponents/Elements/Elements";
import { useModal } from "../../context/ModalContext";

interface ModalProps {
  title: string;
}

export const Modal: React.FC<ModalProps> = ({ children, title }) => {
  const { isOpenFeedback, setIsOpenFeedback } = useModal();

  if (!isOpenFeedback) return null;

  return (
    <Styled.Layout onClick={() => setIsOpenFeedback(false)}>
      <Styled.ModalWindow onClick={(e) => e.stopPropagation()}>
        <StyledElement.H4>{title}</StyledElement.H4>
        <div>{children}</div>
      </Styled.ModalWindow>
    </Styled.Layout>
  );
};
