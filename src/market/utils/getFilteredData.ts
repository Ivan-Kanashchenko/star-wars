import { IDatafilters } from "../../customHooks/useMarketData";
import { IServerdata } from "../data/productsData";

export const getFilteredData = (
  element: IServerdata,
  filters: IDatafilters
) => {
  if (filters.company) {
    if (!filters.company.includes(element.company)) return false;
  }
  if (filters.country) {
    if (!filters.country.includes(element.country)) return false;
  }
  if (filters.status) {
    if (filters.status === "inStock" && !element.inStock) return false;
    if (filters.status === "notInStock" && element.inStock) return false;
  }
  if (filters.type) {
    if (!filters.type.includes(element.type)) return false;
  }
  if (filters.price) {
    const priceArr = filters.price.split("-");
    const minPrice = Number(priceArr[0]);
    const maxPrice = Number(priceArr[1]);
    if (minPrice > element.salePrice || element.salePrice > maxPrice)
      return false;
  }
  return true;
};
