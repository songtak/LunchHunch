import React, { useEffect, useRef, useState } from "react";
import useMenuList from "../libs/useMenuList";

const SingleMarkerMap = ({ selectedMark }: any) => {
  const mapElement = useRef(null);
  /** @ts-ignore */
  const { naver } = window;

  console.log("selectedMark", selectedMark);

  useEffect(() => {
    if (!mapElement.current || !naver || !selectedMark) return;

    const mapOptions = {
      center: new naver.maps.LatLng(
        selectedMark?.coordinate.split(", ")[0],
        selectedMark?.coordinate.split(", ")[1]
      ),
      zoom: 17,
      zoomControl: true,
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(
        selectedMark.coordinate.split(", ")[0],
        selectedMark.coordinate.split(", ")[1]
      ),
      map,
    });

    naver.maps.Event.addListener(marker, "click", () => {
      handleClickEvent();
    });
  }, [mapElement, selectedMark, naver]);

  const handleClickEvent = () => {
    const openNewWindow = window.open("about:blank");
    /** @ts-ignore */
    openNewWindow.location.href = selectedMark.url;
  };

  return <div ref={mapElement} className="mapContainer" />;
};

export default SingleMarkerMap;
