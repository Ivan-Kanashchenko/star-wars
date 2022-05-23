import * as React from "react";
import { FC } from "react";
import { CustomCheckbox } from "../../StyledComponents/CustomCheckbox/CustomCheckbox";
import { StyledElement } from "../../StyledComponents/Elements/Elements";
import MultiRangeSlider from "../../StyledComponents/MultiRangeSlider/MultiRangeSlider";
import { Styled } from "./styles";

export const FiltersBar: FC = () => {
  return (
    <Styled.Container>
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

      <MultiRangeSlider
        min={0}
        max={1000}
        onChange={({ min, max }: { min: number; max: number }) =>
          console.warn(`min = ${min}, max = ${max}`)
        }
      />

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
    </Styled.Container>
  );
};
