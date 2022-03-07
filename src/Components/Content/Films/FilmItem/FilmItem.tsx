import * as React from "react";
import { FC } from "react";
import { useState } from "react";
import { useActorsData } from "../../../../customHooks/customHooks";
import { useContent } from "../../../ContentContext/ContentContext";
import StyledCard from "../../../StyledComponents/Cards/MainCard";
import StyledActorsCard from "../../../StyledComponents/Cards/ActorsCard";
import StyledElement from "../../../StyledComponents/Elements/Elements";
import { Loading } from "../../../Loading/Loading";

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
  const { content } = useContent();

  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <StyledCard.Card flexColumn>
      <StyledCard.Info theme={content}>
        <StyledElement.H2>{title}</StyledElement.H2>
        <StyledElement.H3>
          Episode:
          <StyledElement.Span theme={content}>{episode_id}</StyledElement.Span>
        </StyledElement.H3>
        <StyledElement.Container>
          <StyledElement.Paragraph>{opening_crawl}</StyledElement.Paragraph>
        </StyledElement.Container>
        <StyledElement.Container>
          <StyledElement.Container>
            director:
            <StyledElement.Span theme={content}>{director}</StyledElement.Span>
          </StyledElement.Container>
          <StyledElement.Container>
            producer:
            <StyledElement.Span theme={content}>{producer}</StyledElement.Span>
          </StyledElement.Container>
          <StyledElement.Container>
            release date:
            <StyledElement.Span theme={content}>
              {release_date}
            </StyledElement.Span>
          </StyledElement.Container>
        </StyledElement.Container>
        <StyledElement.Container itemscenter>
          <StyledElement.Button
            onClick={toggleActors}
            theme={content}
            disabled={isLoading}
          >
            {actors ? "hide actors" : "actors"}
          </StyledElement.Button>
        </StyledElement.Container>
        {actors && (
          <Actors episode_id={episode_id} toggleLoading={toggleLoading} />
        )}
      </StyledCard.Info>
    </StyledCard.Card>
  );
};

type ActorsTypes = {
  episode_id: number;
  toggleLoading: (arg0: boolean) => void;
};

const Actors: FC<ActorsTypes> = ({ episode_id, toggleLoading }) => {
  const { status, data, error } = useActorsData(episode_id);
  const { content } = useContent();

  if (status === "loading") {
    toggleLoading(true);
  } else {
    toggleLoading(false);
  }
  return (
    <div>
      <div>
        {status === "loading" && <Loading />}
        {status === "error" && <span>Error: {error.message}</span>}
        {status === "success" && (
          <StyledActorsCard.ActorsCard>
            {data.actorsList.map((el) => (
              <StyledElement.Container key={el.name} flexColumn actorsCard>
                <StyledElement.Container>
                  Name:
                  <StyledElement.Span theme={content}>
                    {el.name}
                  </StyledElement.Span>
                </StyledElement.Container>
                <StyledElement.Container>
                  Birth year:
                  <StyledElement.Span>{el.birth_year}</StyledElement.Span>
                </StyledElement.Container>
                <StyledElement.Container>
                  Gender:
                  <StyledElement.Span>{el.gender}</StyledElement.Span>
                </StyledElement.Container>
                <StyledElement.Container>
                  Skin color:
                  <StyledElement.Span>{el.skin_color}</StyledElement.Span>
                </StyledElement.Container>
              </StyledElement.Container>
            ))}
          </StyledActorsCard.ActorsCard>
        )}
      </div>
    </div>
  );
};
