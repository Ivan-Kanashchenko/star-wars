import React, { FC } from "react";
import { Styled } from "../styles";

interface IProductBuySectionBlock {
  title?: string;
  data: string;
  icon: React.ReactChild;
}

export const ProductBuySectionBlock: FC<IProductBuySectionBlock> = ({
  title,
  data,
  icon,
}) => {
  return (
    <Styled.BuySection flexStart>
      {icon}
      {!!title && <Styled.Span>{title}</Styled.Span>}
      <Styled.Span>{data}</Styled.Span>
    </Styled.BuySection>
  );
};
