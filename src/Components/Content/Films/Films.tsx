import * as React from "react";
import { FC } from "react";
import { useFilmsData } from "../../../customHooks/customHooks";
import { Loading } from "../../Loading/Loading";
import { FilmItem } from "./FilmItem/FilmItem";
import Styled from "./styles";

export const Films: FC = () => {
  const { status, data, error } = useFilmsData();

  return (
    <Styled.FilmsContainer>
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
    </Styled.FilmsContainer>
  );
};
