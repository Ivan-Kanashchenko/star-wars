import { useSearchParams } from "react-router-dom";

export const useQueryStringParams = () => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const setParams = (name: string, params: string) => {
    const objectFromQueryString = Object.fromEntries(searchParams.entries());

    //removing filter from queryString
    if (!params) {
      const thisIsObject = Object.keys(objectFromQueryString)
        .filter((key) => key !== name)
        .reduce((obj, key) => {
          obj[key] = objectFromQueryString[key];
          return obj;
        }, {});
      setSearchParams(thisIsObject);
    } else {
      //adding or modification queryString
      setSearchParams(
        Object.assign({}, objectFromQueryString, { [name]: params })
      );
    }
  };

  return { searchParams, setParams };
};
