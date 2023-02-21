import React, { FC } from "react";
import { StyledCard } from "../../../ui/Cards/MainCard";
import { StyledElement } from "../../../ui/Elements";
import { useLocation } from "react-router-dom";

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
  const { pathname } = useLocation();

  return (
    <StyledCard.Card flexRow>
      <StyledCard.Info theme={pathname}>
        <StyledElement.H2>{name}</StyledElement.H2>
        <StyledElement.H3>Gender: {gender}</StyledElement.H3>
        <StyledElement.Ul>
          <StyledElement.Li>
            mass:
            <StyledElement.Span theme={pathname}>{mass}</StyledElement.Span>
          </StyledElement.Li>
          <StyledElement.Li>
            hair color:
            <StyledElement.Span theme={pathname}>
              {hair_color}
            </StyledElement.Span>
          </StyledElement.Li>
          <StyledElement.Li>
            skin color:
            <StyledElement.Span theme={pathname}>
              {skin_color}
            </StyledElement.Span>
          </StyledElement.Li>
          <StyledElement.Li>
            eye color:
            <StyledElement.Span theme={pathname}>
              {eye_color}
            </StyledElement.Span>
          </StyledElement.Li>
          <StyledElement.Li>
            birth year:
            <StyledElement.Span theme={pathname}>
              {birth_year}
            </StyledElement.Span>
          </StyledElement.Li>
        </StyledElement.Ul>
      </StyledCard.Info>
      <StyledCard.Image />
    </StyledCard.Card>
  );
};
