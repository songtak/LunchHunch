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
  {
    title: "games",
    path: "/games",
    element: Pages.MiniGameListPage,
  },
  {
    title: "games/random-number",
    path: "/random-number",
    element: Pages.RandomNumberPage,
  },
  {
    title: "games/random-button",
    path: "/random-button",
    element: Pages.RandomButtonPage,
  },
];
