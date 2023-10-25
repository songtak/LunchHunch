import React, { useEffect } from "react";
import "./Web.css";
import "./Mobile.css";
import _ from "lodash";
import ReactGA from "react-ga4";

import EncryptedJson from "./utils/EncryptedJson";
import PinMap from "./containers/MarkerMap";
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
    <div className="App">
      <div className="title">Lunch Hunch.demo</div>
      <div className="title_sub">
        <div>한남동 직장인 점심메뉴 추천</div>
        <div style={{ marginTop: "10px", fontSize: 14 }}>
          (* 한남동 맛집 아님, 단순 직장인 점심메뉴 모음, pc에서 보는걸 추천
          드립니다.)
        </div>
      </div>

      <PinMap />
      {/* <EncryptedJson /> */}
      {/* <EncryptedData /> */}
      <div style={{ marginTop: 30 }}>추가하고 싶은 점심 여기로 디엠주세요.</div>
      <a href="https://instagram.com/sn9tk?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
        👉🔮👈
      </a>
      <div style={{ marginTop: 10, fontSize: 10 }}>
        ( 추후 다양한 기능 업데이트 예정입니다. )
      </div>
      <div>
        <AdSense />
      </div>

      <div className="footer">
        <div>songtak@2023.10.24</div>
      </div>
    </div>
  );
};

export default App;
