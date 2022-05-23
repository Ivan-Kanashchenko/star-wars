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
          <Styled.Input type="number" />
          <Styled.Input type="number" />
          <Styled.SquareButton>OK</Styled.SquareButton>
        </Styled.InputContainer>
        <input type="range" id="points" name="points" min="0" max="10" />

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

const SquareButton = styled.button`
  border: 1px solid var(--primary3);
  border-radius: 3px;
  color: var(--primary3);
  text-transform: uppercase;
  padding: 5px 10px;

  &:hover {
    color: var(--primary1);
    border: 1px solid var(--primary1);
  }
  &:active {
    background: var(--primary1);
    color: var(--accent7);
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`;

const Input = styled.input`
  border: 1px solid var(--primary3);
  border-radius: 3px;
  padding: 10px;
  width: 80px;
  margin-right: 10px;

  &:hover,
  :focus {
    color: var(--primary1);
    border: 1px solid var(--primary1);
  }
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
  SquareButton,
  InputContainer,
  FiltersBar,
  Goods,
  Input,
};
