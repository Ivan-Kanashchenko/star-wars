import axios from "axios";
import {
  PeopleData,
  PlanetData,
  ResponseActorsData,
  ResponseFilmsData,
  ResponsePeopleData,
  ResponsePlanetData,
} from "./apiTypes";

const baseUrl = process.env.REACT_APP_BASE_API_URL;

export const api = {
  async fetchFilmsData(): Promise<ResponseFilmsData> {
    const { data } = await axios.get<ResponseFilmsData>(`${baseUrl}/films/`);
    return data;
  },
  async fetchPeopleData(): Promise<ResponsePeopleData> {
    const { data } = await axios.get<ResponsePeopleData>(`${baseUrl}/people/`);
    return data;
  },
  async fetchPlanetData(): Promise<ResponsePlanetData> {
    const { data } = await axios.get<ResponsePlanetData>(`${baseUrl}/planets/`);
    return data;
  },

  async fetchActorsData(id: number): Promise<{
    actorsList: PeopleData[];
  }> {
    const { data } = await axios.get<ResponseActorsData>(
      `${baseUrl}/films/${id}/`
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
