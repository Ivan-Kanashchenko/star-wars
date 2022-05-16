import * as React from "react";
import { Styled } from "./styles";

export const Content: React.FC = ({ children }) => {
  return (
    <Styled.ContentContainer>
      <Styled.Content>{children}</Styled.Content>
      <Styled.BackgroundLeft />
      <Styled.BackgroundRight />
    </Styled.ContentContainer>
  );
};
