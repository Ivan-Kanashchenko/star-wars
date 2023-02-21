import React, { FC } from "react";
import { Styled } from "./styles";
import { StyledElement } from "../../../ui/Elements";

interface IProductInfoSectionProps {
  title: string;
  description: string;
  characteristics: { heigth: string; width: string; weight: string };
}

export const ProductInfoSection: FC<IProductInfoSectionProps> = ({
  title,
  description,
  characteristics,
}) => {
  return (
    <Styled.InfoContainer>
      {!!description && (
        <Styled.InfoSection>
          <Styled.Span>Description</Styled.Span>
          <StyledElement.H5>{title}</StyledElement.H5>
          <div>{description}</div>
        </Styled.InfoSection>
      )}
      {!!characteristics && (
        <Styled.InfoSection>
          <Styled.Span>Characteristics</Styled.Span>
          <StyledElement.Ul productCard>
            <StyledElement.Li productCard>
              height: {characteristics.heigth};
            </StyledElement.Li>
            <StyledElement.Li productCard>
              width: {characteristics.width};
            </StyledElement.Li>
            <StyledElement.Li productCard>
              weight: {characteristics.weight};
            </StyledElement.Li>
          </StyledElement.Ul>
        </Styled.InfoSection>
      )}
    </Styled.InfoContainer>
  );
};
