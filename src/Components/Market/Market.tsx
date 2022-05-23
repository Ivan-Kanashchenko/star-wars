import * as React from "react";
import { FiltersBar } from "./FiltersBar/FiltersBar";
import { Styled } from "./styles";

export const Market: React.FC = () => {
  return (
    <Styled.Container>
      <FiltersBar />
      <Styled.Goods>Goods</Styled.Goods>
    </Styled.Container>
  );
};
