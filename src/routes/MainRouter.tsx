import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import _ from "lodash";

import { RoutePropInterface } from "../interfaces/commonInterface";
import { MainRoutes } from "./MainRoutes";

const MainRouter = () => {
  return (
    <div className="App">
      <Routes>
        {MainRoutes.map((item: RoutePropInterface) => {
          const Element = item.element;
          return (
            <Route key={item.title} path={item.path} element={<Element />} />
          );
        })}
        <Route path="*" element={<div>404에러</div>} />
      </Routes>
      <div className="footer">
        <div style={{ marginTop: 30 }}>
          추가하고 싶은 점심 여기로 디엠주세요.
        </div>
        <a href="https://instagram.com/sn9tk?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
          👉🔮👈
        </a>
        <div style={{ marginTop: 10, fontSize: 10 }}>
          ( 추후 다양한 기능 업데이트 예정입니다. )
        </div>
        <div>songtak@2023.10.24</div>
      </div>
    </div>
  );
};

export default MainRouter;
