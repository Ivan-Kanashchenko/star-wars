import * as React from "react";
import { FC } from "react";

type PeopleItemTypes = {
  name: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

export const PeopleItem: FC<PeopleItemTypes> = ({
  name,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
}) => {
  return (
    <div className="content-cards-item">
      <h2>{name}</h2>
      <h3> Gender: {gender}</h3>
      <ul>
        <li>mass: {mass}</li>
        <li>hair_color: {hair_color}</li>
        <li>skin_color: {skin_color}</li>
        <li>eye_color: {eye_color}</li>
        <li>birth_year: {birth_year}</li>
      </ul>
    </div>
  );
};
