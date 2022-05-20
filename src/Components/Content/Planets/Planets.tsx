import * as React from "react";
import { usePlanetData } from "../../../customHooks/apiHooks";
import { StyledCard } from "../../StyledComponents/Cards/MainCard";
import { Loading } from "../../StyledComponents/Loading/Loading";
import { PlanetItem } from "./PlanetItem/PlanetItem";

export const Planets: React.FC = () => {
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
