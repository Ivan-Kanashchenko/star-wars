import * as React from "react";
import { FC } from "react";
import { useContent } from "../../../Context/ContentContext";
import StyledCard from "../../../StyledComponents/Cards/MainCard";
import StyledElement from "../../../StyledComponents/Elements/Elements";

type PeopleItemTypes = {
  name: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

export const PeopleItem: FC<PeopleItemTypes> = ({
  name,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
}) => {
  const { content } = useContent();

  return (
    <StyledCard.Card flexRow>
      <StyledCard.Info theme={content}>
        <StyledElement.H2>{name}</StyledElement.H2>
        <StyledElement.H3>Gender: {gender}</StyledElement.H3>
        <StyledElement.Ul>
          <StyledElement.Li>
            mass:
            <StyledElement.Span theme={content}>{mass}</StyledElement.Span>
          </StyledElement.Li>
          <StyledElement.Li>
            hair color:
            <StyledElement.Span theme={content}>
              {hair_color}
            </StyledElement.Span>
          </StyledElement.Li>
          <StyledElement.Li>
            skin color:
            <StyledElement.Span theme={content}>
              {skin_color}
            </StyledElement.Span>
          </StyledElement.Li>
          <StyledElement.Li>
            eye color:
            <StyledElement.Span theme={content}>{eye_color}</StyledElement.Span>
          </StyledElement.Li>
          <StyledElement.Li>
            birth year:
            <StyledElement.Span theme={content}>
              {birth_year}
            </StyledElement.Span>
          </StyledElement.Li>
        </StyledElement.Ul>
      </StyledCard.Info>
      <StyledCard.Image />
    </StyledCard.Card>
  );
};
