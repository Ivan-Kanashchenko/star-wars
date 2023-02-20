import React, { FC } from "react";

import { Styled } from "./styles";

export const ContentWrapper: FC = ({ children }) => {
  return (
    <Styled.ContentContainer>
      <Styled.BackgroundLeft />
      <Styled.Content>{children}</Styled.Content>
      <Styled.BackgroundRight />
    </Styled.ContentContainer>
  );
};
