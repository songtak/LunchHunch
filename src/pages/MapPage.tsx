import React from "react";
import MarkerMap from "../containers/MarkerMap";

const MapPage = () => {
  return (
    <div>
      <MarkerMap />
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

export default MapPage;
