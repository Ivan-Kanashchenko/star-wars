import React, { FC, useState } from "react";
import { Loading } from "../../../../ui/Loading";
import { StyledActorsCard } from "../../../../ui/Cards/ActorsCard";
import { StyledCard } from "../../../../ui/Cards/MainCard";
import { StyledElement } from "../../../../ui/Elements";
import { useActorsData } from "../../../../customHooks/apiHooks";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <StyledCard.Card flexColumn>
      <StyledCard.Info theme={location.pathname}>
        <StyledElement.H2>{title}</StyledElement.H2>
        <StyledElement.H3>
          Episode:
          <StyledElement.Span theme={location.pathname}>
            {episode_id}
          </StyledElement.Span>
        </StyledElement.H3>
        <StyledElement.Container>
          <StyledElement.Paragraph>{opening_crawl}</StyledElement.Paragraph>
        </StyledElement.Container>
        <StyledElement.Container>
          <StyledElement.Container>
            director:
            <StyledElement.Span theme={location.pathname}>
              {director}
            </StyledElement.Span>
          </StyledElement.Container>
          <StyledElement.Container>
            producer:
            <StyledElement.Span theme={location.pathname}>
              {producer}
            </StyledElement.Span>
          </StyledElement.Container>
          <StyledElement.Container>
            release date:
            <StyledElement.Span theme={location.pathname}>
              {release_date}
            </StyledElement.Span>
          </StyledElement.Container>
        </StyledElement.Container>
        <StyledElement.Container itemscenter>
          <StyledElement.Button
            onClick={toggleActors}
            theme={location.pathname}
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

const Actors: React.FC<ActorsTypes> = ({ episode_id, toggleLoading }) => {
  const { status, data, error } = useActorsData(episode_id);

  const { pathname } = useLocation();

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
                  <StyledElement.Span theme={pathname}>
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
