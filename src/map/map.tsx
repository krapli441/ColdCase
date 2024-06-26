// 리액트 라이브러리
import React, { useState, useEffect } from "react";

// 리액트 컴포넌트
import getCurrentPosition from "./geolocation";
import CaseMarkers from "./caseMarker";

// 외부 라이브러리
import { Map, MapMarker } from "react-kakao-maps-sdk";

// Chakra UI
import { Box, Text, Spinner } from "@chakra-ui/react";

// 사건 데이터
import murderData from "../case/murderdata"; // 살인사건 데이터
import missingData from "../case/missingdata"; // 실종사건 데이터
import unknownData from "../case/unknowndata"; // 의문사 사건 데이터

// 미제 사건 유형을 하나로 합침
const murder = [...murderData];
const missing = [...missingData];
const unknown = [...unknownData];

// 마커 이미지
const murderImage = { src: "./img/kill.png", size: { width: 24, height: 35 } };
const missingImage = {
  src: "./img/missing.png",
  size: { width: 24, height: 35 },
};
const unknownImage = {
  src: "./img/unknown.png",
  size: { width: 24, height: 35 },
};

// 커스텀 오버레이 스타일
const infoWindowStyle = {
  display: "flex",
  bottom: "40px", // 마커 높이에 맞게 조정
  padding: "5px",
  left: "50%", // 부모 요소의 중앙에 위치
  transform: "translateX(-50%)", // 자신의 너비의 절반만큼 왼쪽으로 이동
  color: "#000",
  backgroundColor: "white",
  borderRadius: "5px",
  boxShadow: "1px 1px 5px 1px rgba(0,0,0,0.5)",
};

const KakaoMap: React.FC = () => {
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [center, setCenter] = useState({ lat: 36.5, lng: 127.5 }); // 대한민국 중심 좌표

  const [loading, setLoading] = useState(true);
  const [openedMurderCaseInfoWindow, setOpenedMurderCaseInfoWindow] = useState<
    number | null
  >(null); // 살인사건 클릭에 대한 상태 관리

  const [openedMissingCaseInfoWindow, setOpenedMissingCaseInfoWindow] =
    useState<number | null>(null); // 실종사건 클릭에 대한 상태 관리

  const [openedUnknownCaseInfoWindow, setOpenedUnknownCaseInfoWindow] =
    useState<number | null>(null); // 신원미상 & 의문사 클릭에 대한 상태 관리

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
    return (
      <>
        <Box
          className="loading-screen"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"1rem"}
        >
          <Spinner color="red.500" size={"lg"} />
          <Text color={"white"}>지도를 불러오는 중입니다.</Text>
        </Box>
      </>
    );
  }

  return (
    <Map
      center={center}
      style={{ width: "90vw", height: "80vh" }}
      level={13}
      isPanto={true}
    >
      <MapMarker position={userLocation}></MapMarker>

      {/* 살인사건 마커 */}
      <CaseMarkers
        cases={murder}
        markerImage={murderImage}
        setOpenedCaseInfoWindow={setOpenedMurderCaseInfoWindow}
        openedCaseInfoWindow={openedMurderCaseInfoWindow}
        infoWindowStyle={infoWindowStyle}
        setCenter={setCenter}
      />
      {/* 실종사건 마커 */}
      <CaseMarkers
        cases={missing}
        markerImage={missingImage}
        setOpenedCaseInfoWindow={setOpenedMissingCaseInfoWindow}
        openedCaseInfoWindow={openedMissingCaseInfoWindow}
        infoWindowStyle={infoWindowStyle}
        setCenter={setCenter}
      />
      {/* 의문사 사건 마커 */}
      <CaseMarkers
        cases={unknown}
        markerImage={unknownImage}
        setOpenedCaseInfoWindow={setOpenedUnknownCaseInfoWindow}
        openedCaseInfoWindow={openedUnknownCaseInfoWindow}
        infoWindowStyle={infoWindowStyle}
        setCenter={setCenter}
      />
    </Map>
  );
};

export default KakaoMap;
