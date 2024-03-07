import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import "animate.css";

// animate__headShake
const InfoPage = ({ setSelectedPage }: any) => {
  const navigate = useNavigate();

  const handleClickLocation = (url: string) => {
    // window.location.href = url;
    navigate(url);
  };

  return (
    <div>
      <div></div>
      <div
        style={{
          // fontSize: "px",
          // marginTop: "44px",
          marginBottom: "24px",
        }}
      >
        <div className="">
          <span
            style={{
              // fontSize: "px",
              // marginTop: "44px",
              // marginBottom: "24px",
              fontWeight: "bold",
            }}
          >
            런치헌치는
          </span>{" "}
          <span>한남동 직장인들을 위한 점심추천 사이트 입니다.</span>
          <div></div>
        </div>
        <div className=""></div>
      </div>

      <div className="h40 font12">
        * 추후 다양한 기능과 내용이 추가될 예정입니다.
      </div>
      <div>
        <div>런치헌지에 추천하고 싶은 밥집과 궁금한 질문은</div>
        <div>DM부탁드립니다.</div>
      </div>
      <div
        className="h40"
        onClick={() => {
          window.location.href = "https://instagram.com/sn9tk";
        }}
      >
        👉👾👈
      </div>
    </div>
  );
};

export default InfoPage;
