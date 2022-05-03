import * as React from "react";
import { FC } from "react";
import { useState } from "react";
import { usePlanetsData } from "../../../../customHooks/apiHooks";
import { Loading } from "../../../StyledComponents/Loading/Loading";
import { StyledActorsCard } from "../../../StyledComponents/Cards/ActorsCard";
import { StyledCard } from "../../../StyledComponents/Cards/MainCard";
import { StyledElement } from "../../../StyledComponents/Elements/Elements";
import { useLocation } from "react-router-dom";

type PlanetItemTypes = {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  name: string;
  url: string;
};

export const PlanetItem: FC<PlanetItemTypes> = ({
  climate,
  created,
  diameter,
  edited,
  name,
  url,
}) => {
  const [residents, setResidents] = useState(false);

  const toggleDetails = () => {
    setResidents((prevState) => {
      if (prevState === residents) {
        return !residents;
      }
    });
  };

  const { pathname } = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <StyledCard.Card flexColumn>
      <StyledCard.Info theme={pathname}>
        <StyledElement.H2>{name}</StyledElement.H2>
        <StyledElement.Ul>
          <StyledElement.Li>
            climate:
            <StyledElement.Span theme={pathname}>{climate}</StyledElement.Span>
          </StyledElement.Li>
          <StyledElement.Li>
            created:
            <StyledElement.Span theme={pathname}>{created}</StyledElement.Span>
          </StyledElement.Li>
          <StyledElement.Li>
            diameter:
            <StyledElement.Span theme={pathname}>{diameter}</StyledElement.Span>
          </StyledElement.Li>
          <StyledElement.Li>
            edited:
            <StyledElement.Span theme={pathname}>{edited}</StyledElement.Span>
          </StyledElement.Li>
        </StyledElement.Ul>
        <StyledElement.Container itemscenter>
          <StyledElement.Button
            onClick={toggleDetails}
            theme={pathname}
            disabled={isLoading}
          >
            {residents ? "hide residents" : "residents"}
          </StyledElement.Button>
        </StyledElement.Container>
        {residents && <Planets url={url} toggleLoading={toggleLoading} />}
      </StyledCard.Info>
    </StyledCard.Card>
  );
};

type PlanetsTypes = {
  url: string;
  toggleLoading: (arg0: boolean) => void;
};

const Planets: FC<PlanetsTypes> = ({ url, toggleLoading }) => {
  const { status, data, error } = usePlanetsData(url);

  const { pathname } = useLocation();

  if (status === "loading") {
    toggleLoading(true);
  } else {
    toggleLoading(false);
  }

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "error" && <span>Error: {error.message}</span>}

      {status === "success" && (
        <>
          {data.planetResidents.length ? (
            <StyledActorsCard.ActorsCard>
              {data.planetResidents.map((el) => (
                <>
                  <StyledElement.Container key={el.name} flexColumn>
                    <StyledElement.Ul>
                      <StyledElement.Li>
                        Name:
                        <StyledElement.Span theme={pathname}>
                          {el.name}
                        </StyledElement.Span>
                      </StyledElement.Li>
                      <StyledElement.Li>
                        Birth year:
                        <StyledElement.Span theme={pathname}>
                          {el.birth_year}
                        </StyledElement.Span>
                      </StyledElement.Li>
                      <StyledElement.Li>
                        Gender:
                        <StyledElement.Span theme={pathname}>
                          {el.gender}
                        </StyledElement.Span>
                      </StyledElement.Li>
                      <StyledElement.Li>
                        Skin color:
                        <StyledElement.Span theme={pathname}>
                          {el.skin_color}
                        </StyledElement.Span>
                      </StyledElement.Li>
                    </StyledElement.Ul>
                  </StyledElement.Container>
                </>
              ))}
            </StyledActorsCard.ActorsCard>
          ) : (
            <StyledElement.Container itemscenter>
              no residents
            </StyledElement.Container>
          )}
        </>
      )}
    </>
  );
};
