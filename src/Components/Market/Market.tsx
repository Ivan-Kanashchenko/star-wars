import React, { FC, useEffect, useState } from "react";
import { FiltersBar } from "./FiltersBar/FiltersBar";
import { MarketCard } from "../../ui/Cards/MarketCard";
import { Styled } from "./styles";
import { useMarketData } from "../../customHooks/useMarketData";

export const Market: FC = () => {
  const { state } = useMarketData();

  const [marketData, setMarketData] = useState(state);

  useEffect(() => {
    setMarketData(state);
  }, [state]);

  return (
    <Styled.Container>
      <FiltersBar />
      <Styled.Goods>
        {marketData.map((card) => (
          <MarketCard
            key={card.id}
            id={card.id}
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
