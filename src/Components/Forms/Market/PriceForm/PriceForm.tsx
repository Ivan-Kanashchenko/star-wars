import * as React from "react";
import { CustomCheckbox } from "../../../StyledComponents/CustomCheckbox/CustomCheckbox";
import { StyledElement } from "../../../StyledComponents/Elements/Elements";
import { MultiRangeSlider } from "../../../StyledComponents/MultiRangeSlider/MultiRangeSlider";
import { Styled } from "./styles";

export const PriceForm: React.FC = () => {
  return (
    <div>
      <StyledElement.Section>
        <StyledElement.H5>Price</StyledElement.H5>
        <CustomCheckbox label={"before 500uah"} name={"price"} />
        <CustomCheckbox label={"500-1000 uah"} name={"price"} />
        <CustomCheckbox label={"after 1000 uah"} name={"price"} />
      </StyledElement.Section>
      <div>Choose Price</div>
      <Styled.InputContainer>
        <Styled.Input type="number" />
        <Styled.Input type="number" />
        <Styled.SquareButton>OK</Styled.SquareButton>
      </Styled.InputContainer>
      <MultiRangeSlider />
    </div>
  );
};
