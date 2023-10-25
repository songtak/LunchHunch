import React, { useEffect } from "react";
import "./Web.css";
import "./Mobile.css";
import "./index.css";
import _ from "lodash";
import ReactGA from "react-ga4";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./libs/ScrollToTop";
import ErrorBoundary from "./ErrorBoundary";
import MainRouter from "./routes/MainRouter";
import EncryptedJson from "./utils/EncryptedJson";
import AdSense from "./containers/AdSense";

const App = () => {
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
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<MainRouter />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
