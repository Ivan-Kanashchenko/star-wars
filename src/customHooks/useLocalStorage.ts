import { useEffect, useState } from "react";

export const useLocalStorage = (key: string) => {
  const storage = window.localStorage;

  const initialData = storage.getItem(key).split(",");

  const [state, setState] = useState<{ [x: string]: string } | null>({
    [key]: initialData.toString(),
  });

  useEffect(() => {
    storage.setItem(key, state[key]);
  }, [state]);

  const setData = (key: string, id: number) => {
    const data = `${state[key]},${id}`;
    setState({ [key]: data });
  };

  const removeData = (key: string, id: number) => {
    const data = state[key].split(",");
    const newData = data.filter((el) => el !== id.toString());
    setState({ [key]: newData.toString() });
  };

  return { state, setData, removeData };
};
