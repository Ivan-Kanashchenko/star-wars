import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { ProductBuySection } from "./ProductBuySection/ProductBuySection";
import { ProductCommentsSection } from "./ProductCommentsSection/ProductCommentsSection";
import { ProductInfoSection } from "./ProductInfoSection/ProductInfoSection";
import { ProductPreviewSection } from "./ProductPreviewSection/ProductPreviewSection";

import { StyledElement } from "ui";
import { useCommentsData } from "customHooks/useCommentsData";
import { useProductData } from "customHooks/useProductData";

import { Styled } from "./styles";

export const ProductPage: FC = () => {
  const params = useParams();
  const { productData } = useProductData(params.id);
  const { comments } = useCommentsData(params.id);
  return (
    <Styled.Page>
      <StyledElement.H5>{productData[0].title}</StyledElement.H5>
      <Styled.Container>
        <ProductPreviewSection image={productData[0].image} />
        <ProductBuySection
          id={productData[0].id}
          salePrice={productData[0].salePrice}
          price={productData[0].price}
          inStock={productData[0].inStock}
          company={productData[0].company}
          country={productData[0].country}
        />
      </Styled.Container>
      <Styled.Container>
        <ProductInfoSection
          title={productData[0].title}
          description={productData[0].description}
          characteristics={productData[0].characteristics}
        />
        <ProductCommentsSection comments={comments[0].comments} />
      </Styled.Container>
    </Styled.Page>
  );
};
