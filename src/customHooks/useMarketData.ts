import { useState, useEffect } from "react";
import { getFilteredData } from "../market/utils/getFilteredData";

import { useQueryStringParams } from "./useQueryStringParams";
import { IServerdata, productsData } from "../market/data/productsData";

export interface IDatafilters {
  price?: string;
  company?: string;
  country?: string;
  status?: string;
  type?: string;
}

export const useMarketData = () => {
  const { searchParams } = useQueryStringParams();
  const [state, setState] = useState(productsData);

  useEffect(() => {
    if (!searchParams) {
      setState(productsData);
    } else {
      setState(filter(searchParams, productsData));
    }
  }, [searchParams]);

  const filter = (searchParams: URLSearchParams, data: IServerdata[]) => {
    const filters: IDatafilters = Object.fromEntries(searchParams.entries());
    return data.filter((element) => getFilteredData(element, filters));
  };

  return { state };
};
