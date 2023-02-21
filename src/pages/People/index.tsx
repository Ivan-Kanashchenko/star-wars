import React, { FC } from "react";

import { usePeopleData } from "customHooks/apiHooks";

import { Loading, StyledCard } from "ui";
import { PeopleItem } from "./PeopleItem/PeopleItem";

export const People: FC = () => {
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
