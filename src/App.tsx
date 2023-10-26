import React, { useEffect, useState } from "react";
import "./Web.css";
import "./Mobile.css";
import "./index.css";
import _ from "lodash";
import ReactGA from "react-ga4";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Router, Route, Routes } from "react-router-dom"; // 수정된 코드
import ScrollToTop from "./libs/ScrollToTop";
import ErrorBoundary from "./ErrorBoundary";
import MainRouter from "./routes/MainRouter";
import EncryptedJson from "./utils/EncryptedJson";
import AdSense from "./containers/AdSense";
import { MainRoutes } from "./routes/MainRoutes";
import * as Pages from "../src/pages";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<
    "main" | "map" | "random" | "list"
  >("main");

  useEffect(() => {
    if (process.env.REACT_APP_PROD) {
      /** @ts-ignore */
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
      ReactGA.set({ page: "main" });
      ReactGA.send("pageview");
    }
  }, []);

  return (
    <ErrorBoundary>
      <div className="App">
        <div
          className={`${
            selectedPage === "main" ? "title_wrapper_main" : ""
          } button`}
          onClick={() => {
            setSelectedPage("main");

            // window.location.href = "/";
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
          {selectedPage === "main" && (
            <Pages.MainPage setSelectedPage={setSelectedPage} />
          )}
          {selectedPage === "random" && (
            <Pages.RandomMenuPage setSelectedPage={setSelectedPage} />
          )}
          {selectedPage === "list" && (
            <Pages.ListPage setSelectedPage={setSelectedPage} />
          )}
          {selectedPage === "map" && (
            <Pages.MapPage setSelectedPage={setSelectedPage} />
          )}
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
            <div>songtak@2023.10.24</div>
          </div>
        </div>
      </div>

      {/* <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<MainRouter />} />
        </Routes>
      </HashRouter> */}
    </ErrorBoundary>
  );
};

export default App;
