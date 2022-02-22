import * as React from 'react';
import { FC } from 'react';
import { usePeopleData } from "../../../customHooks/customHooks";
import PeopleItem from "./PeopleItem/PeopleItem";

const People:FC = () => {
  const { status, data, error } = usePeopleData();

  return (
    <div className="content-cards">
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
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
    </div>
  );
};

export default People;
