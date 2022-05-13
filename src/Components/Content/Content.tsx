import * as React from "react";
import { Styled } from "./styles";

export const Content = ({ children }: { children: JSX.Element }) => {
  return (
    <Styled.ContentContainer>
      <Styled.Content>{children}</Styled.Content>
      <Styled.BackgroundLeft />
      <Styled.BackgroundRight />
    </Styled.ContentContainer>
  );
};
