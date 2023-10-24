import React, { useState } from "react";
import "./Web.css";
import "./Mobile.css";
import _ from "lodash";

import EncryptedJson from "./utils/EncryptedJson";
import PinMap from "./containers/PinMap";

const App = () => {
  console.log(
    "REACT_APP_NAVER_MAPS_CLIENT_ID",
    process.env.REACT_APP_NAVER_MAPS_CLIENT_ID
  );

  return (
    <div className="App">
      <div className="title">Lunch Hunch</div>
      <div className="title_sub">한남동 직장인 점심메뉴 추천</div>
      <div style={{ marginBottom: "30px" }}>
        (* 한남동 맛집 아님, 단순 직장인 점심메뉴 모음)
      </div>

      <PinMap />
      {/* <EncryptedJson /> */}
      {/* <EncryptedData /> */}
      <div style={{ marginTop: 30 }}>추가하고 싶은 점심 여기로 디엠주세요.</div>
      <a href="https://instagram.com/sn9tk?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
        👉🔮👈
      </a>
      <div style={{ marginTop: 30 }}>추후 다양한 기능 업데이트 예정</div>

      <div className="footer">
        <div>songtak</div>
        <div>2023.10.24</div>
      </div>
    </div>
  );
};

export default App;
