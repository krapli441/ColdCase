// 리액트 라이브러리
import React, { useState, useEffect } from "react";

// 리액트 컴포넌트
import getCurrentPosition from "./geolocation";

// 외부 라이브러리
import { Map, MapMarker } from "react-kakao-maps-sdk";

// Chakra UI
import { Box, Text } from "@chakra-ui/react";

//

const KakaoMap: React.FC = () => {
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentPosition()
      .then((coords) => {
        setUserLocation({ lat: coords.latitude, lng: coords.longitude });
        setLoading(false);
      })
      .catch(() => {
        // 위치 정보를 가져오지 못했을 때의 처리
        setUserLocation({ lat: 36.14709004467551, lng: 127.87682888504136 });
        setLoading(false);
      });
  }, []);

  if (loading || !userLocation) {
    return <Text color={"red"}>지도를 불러오는 중입니다.</Text>;
  }

  return (
    <Map
      center={userLocation}
      style={{ width: "90vw", height: "80vh" }}
      level={13}
    >
      <MapMarker position={userLocation}>
        <Box style={{ color: "#000" }}>당신의 위치</Box>
      </MapMarker>
    </Map>
  );
};

export default KakaoMap;
