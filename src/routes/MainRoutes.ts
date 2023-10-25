import { RoutePropInterface } from "../interfaces/commonInterface";
import * as Pages from "../pages";

export const MainRoutes: RoutePropInterface[] = [
  {
    title: "메인 페이지",
    path: "/",
    element: Pages.MainPage,
  },
  {
    title: "목록",
    path: "/list",
    element: Pages.ListPage,
  },
  {
    title: "지도",
    path: "/map",
    element: Pages.MapPage,
  },
];
