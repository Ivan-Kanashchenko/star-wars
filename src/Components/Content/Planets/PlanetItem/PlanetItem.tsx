import * as React from 'react';
import { FC } from "react";
import { useState } from "react";
import { usePlanetsData } from "../../../../customHooks/customHooks";
import { PlanetItemTypes, PlanetsTypes } from './PlanetItemTypes';


const PlanetItem:FC<PlanetItemTypes> = ({ climate, created, diameter, edited, name, url }) => {
  const [residents, setResidents] = useState(false);

  const toggleDetails = () => {
    setResidents((prevState) => {
      if (prevState === residents) {
        return !residents;
      }
    });
  };

  return (
    <div className="content-cards-item">
      <h2>{name}</h2>
      <div>
        <div>climate: {climate}</div>
        <div>created: {created}</div>
        <div>diameter: {diameter}</div>
        <div>edited: {edited}</div>
        <div>
          <button onClick={toggleDetails}>
            {residents ? "hide residents" : "residents"}{" "}
          </button>

          {residents && <Planets url={url} />}
        </div>
      </div>
    </div>
  );
};

export default PlanetItem;

const Planets: FC<PlanetsTypes> = ({ url }) => {
  const { status, data, error } = usePlanetsData(url);

  return (
    <div>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <div className="person-card">
            {data.planetResidents.length
              ? data.planetResidents.map((el) => (
                  <div className="person-card-item" key={el.name}>
                    <div>Name: {el.name}</div>
                    <div>Birth year: {el.birth_year}</div>
                    <div>Gender: {el.gender}</div>
                    <div>Skin color: {el.skin_color}</div>
                  </div>
                ))
              : "no residents"}
          </div>
        )}
      </div>
    </div>
  );
};
