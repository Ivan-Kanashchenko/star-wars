import { useSearchParams } from "react-router-dom";

type Filter = {
  price?: string;
  country?: string;
  rate?: string;
  propositions?: string;
};

export const getQueryStringFromObject = (filter: Filter) => {
  // {price:"700"} to "price=700"
  return new URLSearchParams(filter).toString();
};

export const getObjectFromQueryString = (search: string) => {
  // "price=700" to {price:"700"}
  const paramsEntries = new URLSearchParams(search).entries();

  return Object.fromEntries(paramsEntries);
};

export const useQueryStringFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return { searchParams, setSearchParams };
};
