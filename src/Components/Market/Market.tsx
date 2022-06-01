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
        {data.map((card) => (
          <MarketCard
            key={card.id}
            title={card.title}
            image={card.image}
            price={card.price}
            salePrice={card.salePrice}
            inStock={card.inStock}
          />
        ))}
      </Styled.Goods>
    </Styled.Container>
  );
};
