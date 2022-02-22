import { useQuery } from "react-query";
import { api } from "../api/api";
import {
  PeopleData,
  ResponseFilmsData,
  ResponsePeopleData,
  ResponsePlanetData,
} from "../api/apiTypes";

export function useFilmsData() {
  return useQuery<ResponseFilmsData, Error>("films", api.fetchFilmsData);
}
export function usePeopleData() {
  return useQuery<ResponsePeopleData, Error>("people", api.fetchPeopleData);
}
export function usePlanetData() {
  return useQuery<ResponsePlanetData, Error>("planet", api.fetchPlanetData);
}
export function useActorsData(id: number) {
  return useQuery<
    {
      actorsList: PeopleData[];
    },
    Error
  >(["actors", id], () => {
    return api.fetchActorsData(id);
  });
}
export function usePlanetsData(url: string) {
  return useQuery<
    {
      planetResidents: PeopleData[];
    },
    Error
  >(["planets", url], () => {
    return api.fetchPlanetsData(url);
  });
}
