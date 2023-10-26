import React, { useEffect, useState } from "react";
import _ from "lodash";
import "animate.css";
import MarkerMap from "../containers/MarkerMap";
import useMenuList from "../libs/useMenuList";
import SingleMarkerMap from "../containers/SingleMarkerMap";

const RandomMenuPage = ({ setSelectedPage }: any) => {
  const locations = useMenuList();
  const [randomMenu, setRandomMenu] = useState<any>();

  const randomNumber = Math.floor(Math.random() * (locations.length + 2));

  const handleClickRandom = () => {
    setRandomMenu(locations[randomNumber]);
  };

  useEffect(() => {
    locations.length > 0 && setRandomMenu(locations[randomNumber]);
  }, [locations]);

  return (
    <div>
      {/* <MarkerMap /> */}
      <div className="KoddiUDOnGothic-Regular animate__animated animate__zoomIn">
        {/* <div className="menu_title ">여긴 어떤가요?</div> */}
        {!_.isUndefined(randomMenu) && (
          <div>
            <div className="menu_title">{`< ${randomMenu.name} >`}</div>
            <SingleMarkerMap selectedMark={randomMenu} />
            <div className="menu_content" style={{ marginTop: "32px" }}>
              운영 시간:
              {!_.isUndefined(randomMenu?.openhour) &&
              !_.isUndefined(randomMenu.openhour.split(",")[0])
                ? randomMenu.openhour.split(",")[0]
                : "-"}
              ~
              {!_.isUndefined(randomMenu?.openhour) &&
              !_.isUndefined(randomMenu.openhour.split(",")[1])
                ? randomMenu.openhour.split(",")[1]
                : "-"}
            </div>
            <div className="menu_content">
              휴뮤일 :{" "}
              {!_.isEmpty(randomMenu.closeDay) ? randomMenu.closeDay : "-"}
            </div>
            <div className="menu_content">평균 식대: {randomMenu.price}</div>
            <div className="menu_content">
              메뉴 : {!_.isEmpty(randomMenu.menu) ? randomMenu.menu : "-"}
            </div>
          </div>
        )}
      </div>

      <div className="KoddiUDOnGothic-Regular mt_30">
        <button
          className="button-28 "
          role="button"
          onClick={handleClickRandom}
        >
          다른 메뉴
        </button>
      </div>
      <div className="KoddiUDOnGothic-Regular mt_30">
        <button
          className="button-27"
          role="button"
          onClick={() => {
            setSelectedPage("main");
            // window.location.href = "/";
          }}
        >
          Lunch Bunch
        </button>
      </div>
    </div>
  );
};

export default RandomMenuPage;
