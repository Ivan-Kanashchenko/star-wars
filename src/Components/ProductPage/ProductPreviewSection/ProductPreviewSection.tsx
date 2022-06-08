import * as React from "react";
import { Styled } from "./styles";

export const ProductPreviewSection: React.FC<{ image: string }> = ({
  image,
}) => {
  return <Styled.ImageSection image={image} />;
};
