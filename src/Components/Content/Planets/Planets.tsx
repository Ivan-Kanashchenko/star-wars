import * as React from "react";
import { FC } from "react";
import { usePlanetData } from "../../../customHooks/customHooks";
import { PlanetItem } from "./PlanetItem/PlanetItem";

export const Planets: FC = () => {
  const { status, data, error } = usePlanetData();

  return (
    <div className="content-cards">
      {status === "loading" && "Loading..."}

      {status === "error" && <span>Error: {error.message}</span>}

      {status === "success" && (
        <>
          {data.results.map((item) => (
            <PlanetItem
              climate={item.climate}
              created={item.created}
              diameter={item.diameter}
              edited={item.edited}
              name={item.name}
              url={item.url}
              key={item.name}
            />
          ))}
        </>
      )}
    </div>
  );
};
