import React, { FC } from "react";
import { Loading, StyledCard } from "ui";
import { useFilmsData } from "customHooks/apiHooks";

import { FilmItem } from "./FilmItem/FilmItem";

export const Films: FC = () => {
  const { status, data, error } = useFilmsData();

  return (
    <StyledCard.Container>
      {status === "loading" && <Loading />}
      {status === "error" && <span>Error: {error.message}</span>}
      {status === "success" && (
        <>
          {data.results.map((item) => (
            <FilmItem
              key={item.episode_id}
              title={item.title}
              episode_id={item.episode_id}
              opening_crawl={item.opening_crawl}
              director={item.director}
              producer={item.producer}
              release_date={item.release_date}
            />
          ))}
        </>
      )}
    </StyledCard.Container>
  );
};
