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
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "80vw", height: "80vh" }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
};

export default KakaoMap;
