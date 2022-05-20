import * as React from "react";
import { Styled } from "./styles";

export const Content: React.FC = ({ children }) => {
  return (
    <Styled.ContentContainer>
      <Styled.BackgroundLeft />
      <Styled.Content>{children}</Styled.Content>
      <Styled.BackgroundRight />
    </Styled.ContentContainer>
  );
};
