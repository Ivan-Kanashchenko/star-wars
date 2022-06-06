import * as React from "react";
import { useEffect } from "react";
import { data, IServerdata } from "../market/data/data";
import { getFilteredData } from "../market/utils/getFilteredData";
import { useQueryStringParams } from "./useQueryStringParams";

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
