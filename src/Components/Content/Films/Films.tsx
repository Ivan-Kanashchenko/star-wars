import * as React from "react";
import { useFilmsData } from "../../../customHooks/apiHooks";
import { StyledCard } from "../../StyledComponents/Cards/MainCard";
import { Loading } from "../../StyledComponents/Loading/Loading";
import { FilmItem } from "./FilmItem/FilmItem";

export const Films: React.FC = () => {
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
