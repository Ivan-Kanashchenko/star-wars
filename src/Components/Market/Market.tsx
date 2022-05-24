import * as React from "react";
import { data } from "../../market/data/data";
import { MarketCard } from "../StyledComponents/Cards/MarketCard/MarketCard";
import { FiltersBar } from "./FiltersBar/FiltersBar";
import { Styled } from "./styles";

export const Market: React.FC = () => {
  return (
    <Styled.Container>
      <FiltersBar />
      <Styled.Goods>
        {data.map((item) => (
          <MarketCard
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            salePrice={item.salePrice}
            inStock={item.inStock}
          />
        ))}
      </Styled.Goods>
    </Styled.Container>
  );
};
