import { useQuery } from "react-query";
import { api } from "../api/api";

export function useFilmsData() {
  return useQuery("films", api.fetchFilmsData);
}
export function usePeopleData() {
  return useQuery("people", api.fetchPeopleData);
}
export function usePlanetData() {
  return useQuery("planet", api.fetchPlanetData);
}
export function useActorsData(id) {
  return useQuery(["actors", id], () => {
    return api.fetchActorsData(id);
  });
}
export function usePlanetsData(url) {
  return useQuery(["planets", url], () => {
    return api.fetchPlanetsData(url);
  });
}
