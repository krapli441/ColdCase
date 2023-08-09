// 리액트 라이브러리
import React, { useState, useEffect } from "react";

// 리액트 컴포넌트
import getCurrentPosition from "./geolocation";

// 외부 라이브러리
import { Map, MapMarker } from "react-kakao-maps-sdk";

// Chakra UI

// ----------------------------------------------------------------------

const KakaoMap: React.FC = () => {
  // 사용자의 위치를 저장할 상태
  const [userLocation, setUserLocation] = useState({
    lat: 36.14709004467551,
    lng: 127.87682888504136,
  });

  // 컴포넌트가 마운트될 때 사용자의 위치를 가져옴
  useEffect(() => {
    getCurrentPosition().then((coords) => {
      setUserLocation({ lat: coords.latitude, lng: coords.longitude });
    });
  }, [Map]);

  return (
    <Map
      center={{ lat: 36.14709004467551, lng: 127.87682888504136 }}
      style={{ width: "90vw", height: "80vh" }}
      level={13}
    >
      <MapMarker position={userLocation}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
};

export default KakaoMap;
