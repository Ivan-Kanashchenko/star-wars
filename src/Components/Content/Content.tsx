import * as React from "react";
import { Styled } from "./styles";

export const Content: React.FC = ({ children }) => {
  return (
    <Styled.ContentContainer>
      <Styled.BackgroundLeft />
      <Styled.BackgroundRight />
      <Styled.Content>{children}</Styled.Content>
    </Styled.ContentContainer>
  );
};
