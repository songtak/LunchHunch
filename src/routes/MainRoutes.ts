import { RoutePropInterface } from "../interfaces/commonInterface";
import * as Pages from "../pages";

export const MainRoutes: RoutePropInterface[] = [
  {
    title: "main",
    path: "/",
    element: Pages.MainPage,
  },
  {
    title: "random",
    path: "/random",
    element: Pages.RandomMenuPage,
  },
  {
    title: "list",
    path: "/list",
    element: Pages.ListPage,
  },
  {
    title: "map",
    path: "/map",
    element: Pages.MapPage,
  },
];
