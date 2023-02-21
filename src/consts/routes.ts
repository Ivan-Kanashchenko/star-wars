import {
  Films,
  People,
  Planets,
  Home,
  Login,
  Market,
  ProductPage,
  Register,
} from "pages";

interface IRoutes {
  path: string;
  isProtected?: boolean;
  Component: React.FC;
}

export const ROUTES: IRoutes[] = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "registration",
    Component: Register,
  },
  {
    path: "films",
    Component: Films,
  },
  {
    path: "people",
    isProtected: true,
    Component: People,
  },
  {
    path: "planets",
    isProtected: true,
    Component: Planets,
  },
  {
    path: "market",
    Component: Market,
  },
  {
    path: "market/:id",
    Component: ProductPage,
  },
];
