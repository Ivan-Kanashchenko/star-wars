import { productsData } from "../market/data/productsData";

export const useProductData = (id: string) => {
  const productData = productsData.filter(
    (product) => product.id === Number(id)
  );

  return { productData };
};
