// 리액트 라이브러리
import React, { useState, useEffect } from "react";

// 리액트 컴포넌트
import getCurrentPosition from "./geolocation";

// 외부 라이브러리
import { Map, MapMarker } from "react-kakao-maps-sdk";

// Chakra UI
import { Box, Text, Spinner } from "@chakra-ui/react";

// 사건 데이터
import murderCase from "../case/murderCase"; // 살인사건 데이터
import missingCase from "../case/missingCase"; // 실종사건 데이터
import unknownCase from "../case/unknownCase"; // 의문사 사건 데이터

const KakaoMap: React.FC = () => {
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const [hoveredCases, setHoveredCases] = useState<{
    murder: number | null;
    missing: number | null;
    unknown: number | null;
  }>({
    murder: null,
    missing: null,
    unknown: null,
  });
  const [clickedCase, setClickedCase] = useState<number | null>(null);

  // 미제 사건 유형을 하나로 합침
  const murder = [...murderCase];
  const missing = [...missingCase];
  const unknown = [...unknownCase];

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
      center={userLocation}
      style={{ width: "90vw", height: "80vh" }}
      level={13}
    >
      <MapMarker position={userLocation}></MapMarker>

      {/* 살인사건 마커 */}
      {murder.map((caseData, index) => (
        <MapMarker
          key={index}
          position={caseData.latlng}
          onMouseOver={() =>
            setHoveredCases({ ...hoveredCases, murder: index })
          }
          onMouseOut={() => setHoveredCases({ ...hoveredCases, murder: null })}
          image={{
            src: "./img/kill.png", // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35,
            }, // 마커이미지의 크기입니다
          }}
        >
          {hoveredCases.murder === index && ( // 마우스 오버된 살인사건 마커만 인포박스 표시
            <Box
              style={{
                display: "flex",
                width: "10vw",
                height: "55px",
                color: "black",
              }}
            >
              <Text>{caseData.title}</Text>
            </Box>
          )}
        </MapMarker>
      ))}
      {/* 실종사건 마커 */}
      {missing.map((caseData, index) => (
        <MapMarker
          key={index}
          position={caseData.latlng}
          onMouseOver={() =>
            setHoveredCases({ ...hoveredCases, missing: index })
          }
          onMouseOut={() => setHoveredCases({ ...hoveredCases, missing: null })}
          image={{
            src: "./img/missing.png", // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35,
            }, // 마커이미지의 크기입니다
          }}
        >
          {hoveredCases.missing === index && ( // 마우스 오버된 실종사건 마커만 인포박스 표시
            <Box
              style={{
                display: "flex",
                width: "10vw",
                height: "55px",
                color: "black",
              }}
            >
              <Text>{caseData.title}</Text>
            </Box>
          )}
        </MapMarker>
      ))}
      {/* 의문사 사건 마커 */}
      {unknown.map((caseData, index) => (
        <MapMarker
          key={index}
          position={caseData.latlng}
          onMouseOver={() =>
            setHoveredCases({ ...hoveredCases, unknown: index })
          }
          onMouseOut={() => setHoveredCases({ ...hoveredCases, unknown: null })}
          image={{
            src: "./img/unknown.png", // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35,
            }, // 마커이미지의 크기입니다
          }}
        >
          {hoveredCases.unknown === index && ( // 마우스 오버된 의문사 사건 마커만 인포박스 표시
            <Box
              style={{
                display: "flex",
                width: "10vw",
                height: "55px",
                color: "black",
              }}
            >
              <Text>{caseData.title}</Text>
            </Box>
          )}
        </MapMarker>
      ))}
    </Map>
  );
};

export default KakaoMap;
