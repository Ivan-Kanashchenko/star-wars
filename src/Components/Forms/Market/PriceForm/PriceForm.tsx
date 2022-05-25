import * as React from "react";
import { StyledElement } from "../../../StyledComponents/Elements/Elements";
import { MultiRangeSlider } from "../../../StyledComponents/MultiRangeSlider/MultiRangeSlider";
import { Styled } from "./styles";

export const PriceForm: React.FC = () => {
  const [minValue, setMinValue] = React.useState<number | null>(100);
  const [maxValue, setMaxValue] = React.useState<number | null>(500);

  return (
    <StyledElement.Section>
      <StyledElement.H5>Choose Price</StyledElement.H5>
      <Styled.InputContainer>
        <Styled.Input
          type="number"
          value={minValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMinValue(+e.target.value)
          }
        />
        <Styled.Input
          type="number"
          value={maxValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMaxValue(+e.target.value)
          }
        />
        <Styled.SquareButton>OK</Styled.SquareButton>
      </Styled.InputContainer>
      <MultiRangeSlider
        minValue={minValue}
        maxValue={maxValue}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
      />
    </StyledElement.Section>
  );
};
