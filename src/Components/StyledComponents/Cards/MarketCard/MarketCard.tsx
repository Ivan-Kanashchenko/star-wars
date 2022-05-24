import * as React from "react";
import { FC } from "react";
import { getDiscountValue } from "../../../../helpers/getDiscountValue/getDiscountValue";
import { Styled } from "./styles";

interface MarketCardProps {
  title: string;
  image: string;
  price: number;
  salePrice: number;
  inStock: boolean;
}

export const MarketCard: FC<MarketCardProps> = ({
  title,
  image,
  price,
  salePrice,
  inStock,
}) => {
  const discount = getDiscountValue(salePrice, price);
  return (
    <Styled.Container>
      <Styled.Card>
        <Styled.ImageContainer>
          {!!discount && <Styled.Discount>{discount}%</Styled.Discount>}
          <Styled.Image src={image} inStock={inStock} />
        </Styled.ImageContainer>
        <Styled.Title>
          <Styled.Link href="#" inStock={inStock}>
            {title}
          </Styled.Link>
        </Styled.Title>
        {!!discount && <Styled.OldPrice>{price}$</Styled.OldPrice>}
        <Styled.Price discount={!!discount}>{salePrice}$</Styled.Price>
        {inStock ? (
          <Styled.Stock inStock={inStock}>Есть в наличии</Styled.Stock>
        ) : (
          <Styled.Stock inStock={inStock}>Нет в наличии</Styled.Stock>
        )}
      </Styled.Card>
    </Styled.Container>
  );
};
