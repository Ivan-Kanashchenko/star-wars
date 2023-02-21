import React, { FC, useState, useEffect } from "react";

import { useQueryStringParams } from "customHooks/useQueryStringParams";

import { MultiRangeSlider, StyledElement } from "ui";

import { PriceBlockProps } from "../../../../pages/Market/FiltersBar/FiltersBlock/FiltersBlockTypes";

import { Styled } from "./styles";

export const PriceForm: FC<PriceBlockProps> = ({ data }) => {
  const { searchParams, setParams } = useQueryStringParams();

  const [minValue, setMinValue] = useState<number | null>(100);
  const [maxValue, setMaxValue] = useState<number | null>(500);

  useEffect(() => {
    const isValue = searchParams.has(data.type);
    if (isValue) {
      const values: string[] = searchParams.get(data.type).split("-");
      setMinValue(Number(values[0]));
      setMaxValue(Number(values[1]));
    }
  }, []);

  const handleSubmit = () => {
    setParams(data.type, `${minValue.toString()}-${maxValue.toString()}`);
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
