import React from "react";
import { useNavigate } from "react-router-dom";

const MiniGameListPage = () => {
  const navigate = useNavigate();

  const handleClickLocation = (url: string) => {
    // window.location.href = url;
    navigate(url);
  };
  return (
    <div>
      <div className="KoddiUDOnGothic-Regular mt_30 animate__animated animate__slideInUp">
        <button
          className="button-28 futura"
          role="button"
          onClick={() => {
            // setSelectedPage("list");
            handleClickLocation("/random-number");
          }}
        >
          Random Number
        </button>
      </div>
      <div className="KoddiUDOnGothic-Regular mt_30 animate__animated animate__slideInUp">
        <button
          className="button-28 futura"
          role="button"
          onClick={() => {
            // setSelectedPage("list");
            handleClickLocation("/random-button");
          }}
        >
          Random Button
        </button>
      </div>
      <div className="KoddiUDOnGothic-Regular mt_30">
        <button
          className="button-27 FuturaBoldItalic"
          role="button"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Lunch Hunch
        </button>
      </div>
    </div>
  );
};

export default MiniGameListPage;
