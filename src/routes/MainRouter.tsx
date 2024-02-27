import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import _ from "lodash";
import ReactGA from "react-ga4";

import { RoutePropInterface } from "../interfaces/commonInterface";
import { MainRoutes } from "./MainRoutes";

const MainRouter = () => {
  const { pathname } = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
    //   ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    // }
    if (
      process.env.REACT_APP_PROD &&
      process.env.REACT_APP_GOOGLE_ANALYTICS_ID
    ) {
      /** @ts-ignore */
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
      setInitialized(true);
    }
  }, [process.env.REACT_APP_GOOGLE_ANALYTICS_ID]);

  useEffect(() => {
    if (initialized) {
      ReactGA.set({ page: pathname });
      ReactGA.send("pageview");
    }
  }, [initialized, pathname]);

  return (
    <div className="App">
      <div className="main_wrapper">
        <div className="main_content">
          <div
            className={`${pathname === "/" ? "title_wrapper_main" : ""} button`}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <div className="title">
              {pathname === "/" && (
                <div
                  className="animate__animated animate__fadeInDown FuturaBoldItalic"
                  style={{ marginTop: "80px" }}
                >
                  <div>Lunch</div>
                  <div className="wcenter">
                    <span className="logo_1 w60 h60" />
                  </div>
                  <div>Hunch</div>
                </div>
              )}
              {pathname !== "/" && (
                <div
                  className="animate__animated animate__fadeInDown FuturaBoldItalic"
                  style={{ fontSize: "40px", marginTop: 36, marginBottom: 24 }}
                >
                  <span>Lunch</span>
                  <span
                    className="logo_1 w40 h40"
                    style={{
                      fontSize: "40px",
                      marginRight: 8,
                      marginLeft: 8,
                      paddingTop: 0,
                    }}
                  />
                  <span>Hunch</span>
                </div>
              )}
            </div>
          </div>
          <div>
            <Routes>
              {MainRoutes.map((item: RoutePropInterface) => {
                const Element = item.element;
                return (
                  <Route
                    key={item.title}
                    path={item.path}
                    element={<Element />}
                  />
                );
              })}
              <Route path="*" element={<div>404에러</div>} />
            </Routes>
          </div>
          <div className="footer " style={{ marginTop: 40 }}>
            <div className="animate__animated animate__fadeInUp KoddiUDOnGothic-Regular">
              {/* <div style={{ paddingBottom: "24px" }}></div> */}
              <div
                className="futuralightbt"
                onClick={() => {
                  window.location.href = "https://instagram.com/sn9tk";
                }}
              >
                songtak
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainRouter;
