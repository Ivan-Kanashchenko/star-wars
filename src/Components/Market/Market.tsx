import * as React from "react";
import styled from "styled-components";
import { CustomCheckbox } from "../StyledComponents/CustomCheckbox/CustomCheckbox";
import { StyledElement } from "../StyledComponents/Elements/Elements";

export const Market: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.FiltersBar>
        <StyledElement.H4>Filters</StyledElement.H4>

        <Styled.Section>
          <StyledElement.H5>Price</StyledElement.H5>
          <CustomCheckbox label={"before 500uah"} name={"price"} />
          <CustomCheckbox label={"500-1000 uah"} name={"price"} />
          <CustomCheckbox label={"after 1000 uah"} name={"price"} />
        </Styled.Section>
        <div>Choose Price</div>
        <Styled.InputContainer>
          <input type="number" />
          <input type="number" />
        </Styled.InputContainer>
        <div>slider</div>

        <Styled.Section>
          <StyledElement.H5>Made in</StyledElement.H5>
          <CustomCheckbox label={"China"} name={"country"} />
          <CustomCheckbox label={"Vietnam"} name={"country"} />
        </Styled.Section>
        <Styled.Section>
          <StyledElement.H5>Rate</StyledElement.H5>
          <CustomCheckbox label={"5"} name={"rate"} />
          <CustomCheckbox label={"4"} name={"rate"} />
          <CustomCheckbox label={"3"} name={"rate"} />
          <CustomCheckbox label={"2"} name={"rate"} />
          <CustomCheckbox label={"1"} name={"rate"} />
        </Styled.Section>
        <Styled.Section>
          <StyledElement.H5>Special propositions</StyledElement.H5>
          <CustomCheckbox label={"hit of sales"} name={"propositions"} />
          <CustomCheckbox label={"sale"} name={"propositions"} />
        </Styled.Section>
      </Styled.FiltersBar>
      <Styled.Goods>Goods</Styled.Goods>
    </Styled.Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-items: flex-start;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--accent4);
  margin-top: 10px;
  padding-bottom: 10px;

  &:last-child {
    border-bottom: 1px solid var(--accent4);
  }
`;
const FiltersBar = styled.div`
  width: 100%;
  max-width: 300px;
  background: var(--accent7);
  border-radius: 10px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding: 20px;
`;
const Goods = styled.div`
  width: 100%;
  background: var(--accent4);
  margin: 0 0 0 10px;
`;

const Styled = {
  Container,
  Section,
  InputContainer,
  FiltersBar,
  Goods,
};
