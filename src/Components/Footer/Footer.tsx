import * as React from "react";
import { useModal } from "../../context/ModalContext";
import { Styled } from "./styles";

export const Footer = () => {
  const { setIsOpenFeedback } = useModal();
  return (
    <Styled.Footer>
      <div>Created by Ivan Kanashchenko</div>
      <Styled.SquareButton onClick={() => setIsOpenFeedback(true)}>
        Left feedback...
      </Styled.SquareButton>
    </Styled.Footer>
  );
};
