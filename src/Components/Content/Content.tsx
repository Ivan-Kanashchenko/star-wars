import * as React from "react";
import { useContent } from "../Context/ContentContext";
import StyledElement from "../StyledComponents/Elements/Elements";
import { Films } from "./Films";
import { People } from "./People";
import { Planets } from "./Planets";
import Styled from "./styles";

export const Content = () => {
  const { content } = useContent();

  return (
    <Styled.ContentContainer>
      <Styled.Content>
        {content === "description" && (
          <StyledElement.H3>
            Hi! This is the database of StarWars
          </StyledElement.H3>
        )}
        {content === "films" && <Films />}
        {content === "people" && <People />}
        {content === "planets" && <Planets />}
      </Styled.Content>
      <Styled.BackgroundLeft />
      <Styled.BackgroundRight />
    </Styled.ContentContainer>
  );
};
