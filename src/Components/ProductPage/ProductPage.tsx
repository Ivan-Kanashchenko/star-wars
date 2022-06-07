import * as React from "react";
import { useParams } from "react-router-dom";

export const ProductPage: React.FC = () => {
  const params = useParams();
  return <div>{params.id}</div>;
};
