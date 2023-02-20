export const getDiscountValue = (
  salePrice: number,
  price: number
): number | null => {
  if (salePrice < price) {
    return Math.floor((100 - (salePrice / price) * 100) * -1);
  }
  return null;
};
