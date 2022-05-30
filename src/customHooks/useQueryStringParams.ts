import { useSearchParams } from "react-router-dom";

export const useQueryStringParams = () => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const setParams = (name: string, params: string) => {
    const Obj = Object.fromEntries(searchParams.entries());

    // if (!!name && !params) {
    // }

    setSearchParams(Object.assign({}, Obj, { [name]: params }));

    // const Obj = Object.fromEntries(searchParams.entries());
  };

  return { searchParams, setParams };
};
