import React, { FC } from "react";
import { Styled } from "./styles";
import { StyledElement } from "../StyledComponents/Elements/Elements";

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
