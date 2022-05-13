import axios from "axios";
import {
  PeopleData,
  PlanetData,
  ResponseActorsData,
  ResponseFilmsData,
  ResponsePeopleData,
  ResponsePlanetData,
} from "./apiTypes";

const swapi = "https://swapi.dev/api";

export const api = {
  async fetchFilmsData(): Promise<ResponseFilmsData> {
    const { data } = await axios.get<ResponseFilmsData>(`${swapi}/films/`);
    return data;
  },
  async fetchPeopleData(): Promise<ResponsePeopleData> {
    const { data } = await axios.get<ResponsePeopleData>(`${swapi}/people/`);
    return data;
  },
  async fetchPlanetData(): Promise<ResponsePlanetData> {
    const { data } = await axios.get<ResponsePlanetData>(`${swapi}/planets/`);
    return data;
  },

  async fetchActorsData(id: number): Promise<{
    actorsList: PeopleData[];
  }> {
    const { data } = await axios.get<ResponseActorsData>(
      `${swapi}/films/${id}/`
    );
    const actorsList: Array<PeopleData> = await this.getData(data.characters);
    return { actorsList };
  },
  async fetchPlanetsData(url: string): Promise<{
    planetResidents: PeopleData[];
  }> {
    const { data } = await axios.get<PlanetData>(url);
    const planetResidents: Array<PeopleData> = await this.getData(
      data.residents
    );
    return { planetResidents };
  },

  // reuse data from response for fetching
  async getData(data: string[]): Promise<PeopleData[]> {
    const response = await Promise.all(
      data.map(async (el: string) => axios.get<PeopleData>(el))
    );
    return response.map(({ data }) => data);
  },
};
