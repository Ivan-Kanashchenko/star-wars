import * as React from "react";
import { FiltersBar } from "./FiltersBar/FiltersBar";
import { MarketCard } from "../StyledComponents/Cards/MarketCard/MarketCard";
import { Styled } from "./styles";
import { useMarketData } from "../../customHooks/useMarketData";

export const Market: React.FC = () => {
  const { state } = useMarketData();

  const [marketData, setMarketData] = React.useState(state);

  React.useEffect(() => {
    setMarketData(state);
  }, [state]);

  return (
    <Styled.Container>
      <FiltersBar />
      <Styled.Goods>
        {marketData.map((card) => (
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
