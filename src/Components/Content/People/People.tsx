import * as React from "react";
import { Loading } from "../../StyledComponents/Loading/Loading";
import { PeopleItem } from "./PeopleItem/PeopleItem";
import { StyledCard } from "../../StyledComponents/Cards/MainCard";
import { usePeopleData } from "../../../customHooks/apiHooks";

export const People: React.FC = () => {
  const { status, data, error } = usePeopleData();

  return (
    <StyledCard.Container>
      {status === "loading" && <Loading />}
      {status === "error" && <span>Error: {error.message}</span>}
      {status === "success" && (
        <>
          {data.results.map((item) => (
            <PeopleItem
              key={item.name}
              name={item.name}
              mass={item.mass}
              hair_color={item.hair_color}
              skin_color={item.skin_color}
              eye_color={item.eye_color}
              birth_year={item.birth_year}
              gender={item.gender}
            />
          ))}
        </>
      )}
    </StyledCard.Container>
  );
};
