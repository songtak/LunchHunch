import React from "react";
import MarkerMap from "../containers/MarkerMap";

const MapPage = () => {
  return (
    <div>
      <MarkerMap />
      <div className="KoddiUDOnGothic-Regular mt_30">
        <button
          className="button-27"
          role="button"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Lunch Bunch
        </button>
      </div>
    </div>
  );
};

export default MapPage;
