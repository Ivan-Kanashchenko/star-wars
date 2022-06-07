import * as React from "react";
import { Styled } from "./styles";
import { StyledElement } from "../StyledComponents/Elements/Elements";

export const Home = () => {
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
