import * as React from "react";
import { FC } from "react";
import { useState } from "react";
import { useActorsData } from "../../../../customHooks/customHooks";

type FilmItemType = {
  key: number;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
};

export const FilmItem: FC<FilmItemType> = ({
  title,
  episode_id,
  opening_crawl,
  director,
  producer,
  release_date,
}) => {
  const [actors, setActors] = useState<boolean>(false);

  const toggleActors = (): void => {
    setActors((prevState) => {
      if (prevState === actors) {
        return !actors;
      }
    });
  };

  return (
    <div className="content-cards-item">
      <h2>{title}</h2>
      <h3>Episode: {episode_id}</h3>
      <div>
        <p>{opening_crawl}</p>
      </div>
      <div>
        <div>director: {director}</div>
        <div>producer: {producer}</div>
        <div>release date: {release_date}</div>
        <div>
          <button onClick={toggleActors}>
            {actors ? "hide actors" : "actors"}
          </button>

          {actors && <Actors episode_id={episode_id} />}
        </div>
      </div>
    </div>
  );
};

type ActorsTypes = {
  episode_id: number;
};

const Actors: FC<ActorsTypes> = ({ episode_id }) => {
  const { status, data, error } = useActorsData(episode_id);
  return (
    <div>
      <div>
        {status === "loading" && "Loading..."}
        {status === "error" && <span>Error: {error.message}</span>}
        {status === "success" && (
          <>
            <div className="person-card">
              {data.actorsList.map((el) => (
                <div className="person-card-item" key={el.name}>
                  <div>Name: {el.name}</div>
                  <div>Birth year: {el.birth_year}</div>
                  <div>Gender: {el.gender}</div>
                  <div>Skin color: {el.skin_color}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
