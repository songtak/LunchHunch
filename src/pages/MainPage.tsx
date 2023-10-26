import React, { useEffect, useState } from "react";
import _ from "lodash";
import "animate.css";
import MarkerMap from "../containers/MarkerMap";
import useMenuList from "../libs/useMenuList";
import SingleMarkerMap from "../containers/SingleMarkerMap";

// animate__headShake
const MainPage = ({ setSelectedPage }: any) => {
  const handleClickLocation = (url: string) => {
    window.location.href = url;
  };

  return (
    <div>
      <div className="main_page_content">
        <div className="title_sub KoddiUDOnGothic-Regular">
          <div className="animate__animated animate__pulse">
            <div>한남동 직장인</div>
            <div>점심메뉴 랜덤 추천 사이트</div>
          </div>
          <div
            style={{ marginTop: "24px", fontSize: 16 }}
            className="animate__animated animate__pulse"
          >
            <div>* 한남동 맛집 아님, 단순 직장인 점심메뉴 모음</div>
            <div> * pc에서 보는걸 추천드립니다.</div>
          </div>
        </div>
      </div>
      <div className="KoddiUDOnGothic-Regular mt_30">
        <button
          className="button-28 "
          role="button"
          onClick={() => {
            setSelectedPage("random");
            // handleClickLocation("/#random");
          }}
        >
          랜덤
        </button>
      </div>
      <div className="KoddiUDOnGothic-Regular mt_30">
        <button
          className="button-28 "
          role="button"
          onClick={() => {
            setSelectedPage("map");
            handleClickLocation("/#map");
          }}
        >
          지도
        </button>
      </div>
      <div className="KoddiUDOnGothic-Regular mt_30">
        <button
          className="button-28 "
          role="button"
          onClick={() => {
            alert("준비중");
            // handleClickLocation("/list");
          }}
        >
          목록
        </button>
      </div>

      {/* <button className="button-27" role="button">Button 27</button> */}

      {/* <div className="KoddiUDOnGothic-Regular mt_30">
        <button
          className="button-28 "
          role="button"
          onClick={handleClickRandom}
        >
          다른 메뉴
        </button>
      </div> */}
    </div>
  );
};

export default MainPage;
