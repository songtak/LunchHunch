import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import _ from "lodash";

import { RoutePropInterface } from "../interfaces/commonInterface";
import { MainRoutes } from "./MainRoutes";

const MainRouter = () => {
  return (
    <Routes>
      {MainRoutes.map((item: RoutePropInterface) => {
        const Element = item.element;
        return (
          <Route key={item.title} path={item.path} element={<Element />} />
        );
      })}
      <Route path="*" element={<div>404에러</div>} />
    </Routes>
  );
};

export default MainRouter;
