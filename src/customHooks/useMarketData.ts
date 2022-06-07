import * as React from "react";
import { getFilteredData } from "../market/utils/getFilteredData";
import { useEffect } from "react";
import { useQueryStringParams } from "./useQueryStringParams";
import { IServerdata, data } from "../market/data/data";

export interface IDatafilters {
  price?: string;
  company?: string;
  country?: string;
  status?: string;
  type?: string;
}

export const useMarketData = () => {
  const { searchParams } = useQueryStringParams();
  const [state, setState] = React.useState(data);

  useEffect(() => {
    if (!searchParams) {
      setState(data);
    } else {
      setState(filter(searchParams, data));
    }
  }, [searchParams]);

  const filter = (searchParams: URLSearchParams, data: IServerdata[]) => {
    const filters: IDatafilters = Object.fromEntries(searchParams.entries());
    return data.filter((element) => getFilteredData(element, filters));
  };

  return { state };
};
