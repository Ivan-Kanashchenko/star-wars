import { Films } from "components/Content/Films";
import { People } from "components/Content/People";
import { Planets } from "components/Content/Planets";
import { Home } from "components/Home/Home";
import { Login } from "components/Login/Login";
import { Market } from "components/Market/Market";
import { ProductPage } from "components/ProductPage/ProductPage";
import { Register } from "components/Register/Register";

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
