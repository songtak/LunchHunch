import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import _ from "lodash";

import { RoutePropInterface } from "../interfaces/commonInterface";
import { MainRoutes } from "./MainRoutes";

const MainRouter = () => {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <div
        className={`${pathname === "/" ? "title_wrapper_main" : ""} button`}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <div className="title">
          <div className="animate__animated animate__fadeInDown Hugest">
            Lunch Hunch
          </div>
        </div>
        <div className="title_sub animate__animated animate__fadeInUp Hugest">
          .demo
        </div>
      </div>
      <div>
        <Routes>
          {MainRoutes.map((item: RoutePropInterface) => {
            const Element = item.element;
            return (
              <Route key={item.title} path={item.path} element={<Element />} />
            );
          })}
          <Route path="*" element={<div>404에러</div>} />
        </Routes>
      </div>
      <div className="footer " style={{ marginTop: 40 }}>
        <div className="animate__animated animate__fadeInUp KoddiUDOnGothic-Regular">
          <div style={{ paddingBottom: "24px" }}>
            <div>추가하고 싶은 점심 여기로 디엠주세요.</div>
            <a href="https://instagram.com/sn9tk?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
              👉🔮👈
            </a>
            <div style={{ marginTop: 10, fontSize: 12 }}>
              ( 추후 다양한 기능 업데이트 예정입니다. )
            </div>
          </div>
          <div>songtak@2024.02.14</div>
        </div>
      </div>
    </div>
  );
};

export default MainRouter;
