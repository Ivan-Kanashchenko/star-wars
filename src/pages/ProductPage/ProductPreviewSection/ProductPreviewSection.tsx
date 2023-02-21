import React, { FC } from "react";
import { Styled } from "./styles";

export const ProductPreviewSection: FC<{ image: string }> = ({ image }) => {
  return <Styled.ImageSection image={image} />;
};
