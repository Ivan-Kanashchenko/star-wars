import axios from "axios";

const swapi = "https://swapi.dev/api";

export const api = {
  async fetchFilmsData() {
    const { data } = await axios.get(`${swapi}/films/`);
    return data;
  },
  async fetchPeopleData() {
    const { data } = await axios.get(`${swapi}/people/`);
    return data;
  },
  async fetchPlanetData() {
    const { data } = await axios.get(`${swapi}/planets/`);
    return data;
  },

  async fetchActorsData(id) {
    const { data } = await axios.get(`${swapi}/films/${id}/`);
    const actorsList = await this.getData(data.characters);
    return { actorsList };
  },
  async fetchPlanetsData(url) {
    const { data } = await axios.get(url);
    const planetResidents = await this.getData(data.residents);
    return { planetResidents };
  },

  // reuse for fetching data from response
  async getData(data) {
    const response = await Promise.all(data.map(async (el) => axios.get(el)));
    return response.map(({ data }) => data);
  },
};
