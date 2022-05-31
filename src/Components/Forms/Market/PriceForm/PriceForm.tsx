import * as React from "react";
import { useQueryStringParams } from "../../../../customHooks/useQueryStringParams";
import { StyledElement } from "../../../StyledComponents/Elements/Elements";
import { MultiRangeSlider } from "../../../StyledComponents/MultiRangeSlider/MultiRangeSlider";
import { Styled } from "./styles";

export const PriceForm: React.FC = () => {
  const { searchParams, setParams } = useQueryStringParams();

  const [minValue, setMinValue] = React.useState<number | null>(100);
  const [maxValue, setMaxValue] = React.useState<number | null>(500);

  React.useEffect(() => {
    const isValue = searchParams.has("price");
    if (isValue) {
      const values: string[] = searchParams.get("price").split("-");
      setMinValue(Number(values[0]));
      setMaxValue(Number(values[1]));
    }
  }, []);

  const handleSubmit = () => {
    setParams("price", `${minValue.toString()}-${maxValue.toString()}`);
  };

  return (
    <StyledElement.Section>
      <Styled.InputContainer>
        <Styled.Input
          type="number"
          value={minValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = Number(e.target.value);
            value === 0 ? setMinValue(null) : setMinValue(+e.target.value);
          }}
        />
        <Styled.Input
          type="number"
          value={maxValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = Number(e.target.value);
            value === 0 ? setMaxValue(null) : setMaxValue(+e.target.value);
          }}
        />
        <Styled.SquareButton onClick={handleSubmit}>OK</Styled.SquareButton>
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
