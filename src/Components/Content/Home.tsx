import * as React from "react";
import StyledElement from "../StyledComponents/Elements/Elements";
import Styled from "./styles";

export const Home = () => {
  return (
    <Styled.ContentContainer>
      <Styled.Content>
        <StyledElement.H3>
          Hi! This is the database of StarWars
        </StyledElement.H3>
      </Styled.Content>
      <Styled.BackgroundLeft />
      <Styled.BackgroundRight />
    </Styled.ContentContainer>
  );
};
