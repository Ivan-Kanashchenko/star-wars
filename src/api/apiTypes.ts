//------------------fetchFilmsData----------------
export interface FilmsData {
  title: string;
  director: string;
  episode_id: number;
  opening_crawl: string;
  producer: string;
  release_date: string;
  characters: Array<string>;
  created: string;
  edited: string;
  planets: Array<string>;
  species: Array<string>;
  starships: Array<string>;
  url: string;
  vehicles: Array<string>;
}

export interface ResponseFilmsData {
  count: number;
  next: null | string;
  previous: null | string;
  results: Array<FilmsData>;
}

//-------------------fetchPeopleData--------------
export interface PeopleData {
  birth_year: string;
  gender: string;
  mass: string;
  name: string;
  eye_color: string;
  skin_color: string;
  hair_color: string;
  created: string;
  edited: string;
  films: Array<string>;
  height: string;
  homeworld: string;
  species: [];
  starships: Array<string>;
  url: string;
  vehicles: Array<string>;
}

export interface ResponsePeopleData {
  count: number;
  next: null | string;
  previous: null | string;
  results: Array<PeopleData>;
}

//-------------------fetchPlanetData--------------
export interface PlanetData {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: Array<string>;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: Array<string>;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface ResponsePlanetData {
  count: number;
  next: null | string;
  previous: null | string;
  results: Array<PlanetData>;
}

//-------------------fetchActorsData--------------
export interface ResponseActorsData {
  characters: Array<string>;
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: Array<string>;
  producer: string;
  release_date: string;
  species: Array<string>;
  starships: Array<string>;
  title: string;
  url: string;
  vehicles: Array<string>;
}

//-----------------------------------------------
