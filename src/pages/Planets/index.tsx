import React, { FC } from "react";
import { Loading, StyledCard } from "ui";
import { PlanetItem } from "./PlanetItem/PlanetItem";
import { usePlanetData } from "customHooks/apiHooks";

export const Planets: FC = () => {
  const { status, data, error } = usePlanetData();

  return (
    <StyledCard.Container>
      {status === "loading" && <Loading />}

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
    </StyledCard.Container>
  );
};
