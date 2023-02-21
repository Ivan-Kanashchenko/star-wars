import React, { FC } from "react";

import { StyledElement } from "ui";

import { Styled } from "./styles";

export const Home: FC = () => {
  return (
    <Styled.ContentContainer>
      <Styled.Content>
        <StyledElement.H3>
          Hi! This is the database of StarWars
        </StyledElement.H3>
      </Styled.Content>
    </Styled.ContentContainer>
  );
};
