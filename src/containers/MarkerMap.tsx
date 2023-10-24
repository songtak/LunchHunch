import { useEffect, useRef, useState } from "react";

import _ from "lodash";
import CryptoJS from "crypto-js";

const MarkerMap = () => {
  const mapElement = useRef(null);
  /** @ts-ignore */
  const { naver } = window;

  const [infoWindow, setInfoWindow] = useState<any>(null);

  const [locations, setLocations] = useState<any>([]);

  const secretKey = process.env.REACT_APP_ENCRYPTION_KEY;

  const REACT_APP_HANNAMDONG_LIST = [
    { env: process.env.REACT_APP_HANNAMDONG_LIST_1 },
    { env: process.env.REACT_APP_HANNAMDONG_LIST_2 },
    { env: process.env.REACT_APP_HANNAMDONG_LIST_3 },
  ];

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const decryptedJson = (encryptedData: string) => {
    /** @ts-ignore */
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    decryptedData.map((item: any) => {
      locations.push(item);
    });
  };

  const handleClickMarker = (
    marker: any,
    map: any,
    location: any,
    close?: any
  ) => {
    // 여기에 원하는 로직을 추가하세요.

    if (infoWindow) {
      infoWindow.close();
    }

    // ${isMobile() && <a href={`${location.url}`}>비로가기</a>}
    // <div>${isMobile() && "<span>바로가기</span>"}</div>

    const dddd = () => {
      window.location.href = location.url;
    };

    // <div>${
    //   isMobile() && !_.isUndefined(location.url)
    //     ? `<a style="z-index: 999999999;" href=${location.url}>바로가기</a>`
    //     : ""
    // }</div>

    var content = `<div><div style="padding:10px;min-width:150px;">${
      !_.isUndefined(location.menu) ? location.category : ""
    }</div><div>${location.name}<div><div>open: ${
      !_.isUndefined(location?.openhour) &&
      !_.isUndefined(location.openhour.split(",")[0])
        ? location.openhour.split(",")[0]
        : "-"
    }<div>
        <div>close: ${
          !_.isUndefined(location?.openhour) &&
          !_.isUndefined(location.openhour.split(",")[1])
            ? location.openhour.split(",")[1]
            : "-"
        }<div><div>${
      !_.isUndefined(location.closeDay) ? location.closeDay : "-"
    }</div><div style="padding:10px;">${
      !_.isUndefined(location.price) ? location.price : "-"
    }<div>
        <div>${!_.isUndefined(location.menu) ? location.menu : "-"}</div>
        </div>`;

    const clickedInfoWindow = new naver.maps.InfoWindow({
      content: content,
    });

    /** @ts-ignore */
    if (map) {
      clickedInfoWindow.open(map, marker);
      setInfoWindow(clickedInfoWindow);
    }
    if (close) {
      clickedInfoWindow.close();
    }
  };

  useEffect(() => {
    REACT_APP_HANNAMDONG_LIST.map((item: any) => {
      !_.isUndefined(item.env) && decryptedJson(item.env);
    });
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
    if (!mapElement.current || !naver) return;

    if (locations.length > 0) {
      const mapOptions = {
        /** ts-ignore */
        center: new naver.maps.LatLng(
          locations[0]?.location.split(", ")[0],
          locations[0].location.split(", ")[1]
        ),
        zoom: 17,
        zoomControl: true,
      };

      const map = new naver.maps.Map(mapElement.current, mapOptions);

      // 각 위치에 대한 마커를 추가합니다.
      locations.forEach((location: any) => {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            location.location.split(", ")[0],
            location.location.split(", ")[1]
          ),
          map,
        });

        // 마커 클릭 리스너
        naver.maps.Event.addListener(marker, "click", () => {
          if (isMobile()) {
            handleClickMarker(marker, map, location);
          } else {
            window.location.href = location.url;
          }
        });
        // 마커 호버 리스너
        naver.maps.Event.addListener(marker, "mouseover", () => {
          handleClickMarker(marker, map, location);
          //   handleHoverMarker(location);
        });

        // 마커 호버 중지 리스너를 추가합니다. (선택적)
        naver.maps.Event.addListener(marker, "mouseout", () => {
          //   console.log("Marker hover ended!", location);
          handleClickMarker(marker, map, location, true);
        });
      });
    }
  }, [mapElement, locations]);

  return (
    <>
      <div ref={mapElement} style={{ minHeight: "400px" }} />
    </>
  );

  /** @ts-ignore */
  function success(position) {
    locations.unshift({
      name: "현재 위치",
      location: `${position.coords.latitude}, ${position.coords.longitude}`,
    });
  }

  function error() {
    locations.unshift({
      name: "현재 위치",
      location: "37.5345698, 127.0004869",
    });
    console.log("위치 확인 불가");
  }
};

export default MarkerMap;
