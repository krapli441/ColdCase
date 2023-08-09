// 리액트 라이브러리
import React, { useEffect } from "react";

// 리액트 컴포넌트

// 외부 라이브러리
import { Map, MapMarker } from "react-kakao-maps-sdk";

// Chakra UI

// ----------------------------------------------------------------------

const KakaoMap: React.FC = () => {
  return (
    <Map
      center={{ lat: 36.14709004467551, lng: 127.87682888504136 }}
      style={{ width: "90vw", height: "80vh" }}
      level={13}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
};

export default KakaoMap;
