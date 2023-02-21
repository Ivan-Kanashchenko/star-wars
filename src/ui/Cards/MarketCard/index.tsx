import React, { FC } from "react";

import { getDiscountValue } from "helpers";

import { Styled } from "./styles";

interface MarketCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  salePrice: number;
  inStock: boolean;
}

export const MarketCard: FC<MarketCardProps> = ({
  id,
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
          <Styled.RouterLink to={`${id}`} inStock={inStock}>
            {title}
          </Styled.RouterLink>
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
