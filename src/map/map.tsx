// 리액트 라이브러리
import React, { useState, useEffect } from "react";

// 리액트 컴포넌트
import getCurrentPosition from "./geolocation";

// 외부 라이브러리
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";

// Chakra UI
import { Box, Text, Spinner, Image, Link } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
import { FiX } from "react-icons/fi";

// 사건 데이터
import murderCase from "../case/murderCase"; // 살인사건 데이터
import missingCase from "../case/missingCase"; // 실종사건 데이터
import unknownCase from "../case/unknownCase"; // 의문사 사건 데이터

// 커스텀 오버레이 스타일

const infoWindowStyle = {
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

  const [loading, setLoading] = useState(true);
  const [openedMurderCaseInfoWindow, setOpenedMurderCaseInfoWindow] = useState<
    number | null
  >(null); // 살인사건 클릭에 대한 상태 관리

  const [openedMissingCaseInfoWindow, setOpenedMissingCaseInfoWindow] =
    useState<number | null>(null); // 실종사건 클릭에 대한 상태 관리

  const [openedUnknownCaseInfoWindow, setOpenedUnknownCaseInfoWindow] =
    useState<number | null>(null); // 신원미상 & 의문사 클릭에 대한 상태 관리

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
        <>
          <MapMarker
            key={index}
            position={caseData.latlng}
            image={{
              src: "./img/kill.png", // 마커이미지의 주소입니다
              size: {
                width: 24,
                height: 35,
              }, // 마커이미지의 크기입니다
            }}
            clickable={true}
            onClick={() => setOpenedMurderCaseInfoWindow(index)}
          />
          {openedMurderCaseInfoWindow === index && (
            <CustomOverlayMap position={caseData.latlng}>
              <Box style={infoWindowStyle} position={"absolute"}>
                <FiX onClick={() => setOpenedMurderCaseInfoWindow(null)} />
                <Box
                  style={{
                    width: "max-content",
                    padding: "5px",
                    height: "100%",
                    color: "black",
                  }}
                >
                  {caseData.title}
                  <br />
                  <Box
                    className="information"
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                  >
                    <Link
                      href={caseData.link}
                      style={{ color: "red" }}
                      isExternal
                    >
                      <Text>자세히 보기</Text>
                    </Link>
                    <BiLinkExternal color="black" />
                  </Box>
                </Box>
              </Box>
            </CustomOverlayMap>
          )}
        </>
      ))}
      {/* 실종사건 마커 */}
      {missing.map((caseData, index) => (
        <>
          <MapMarker
            key={index}
            position={caseData.latlng}
            image={{
              src: "./img/missing.png", // 마커이미지의 주소입니다
              size: {
                width: 24,
                height: 35,
              }, // 마커이미지의 크기입니다
            }}
            clickable={true}
            onClick={() => setOpenedMissingCaseInfoWindow(index)}
          />
          {openedMissingCaseInfoWindow === index && (
            <CustomOverlayMap position={caseData.latlng}>
              <Box style={infoWindowStyle} position={"absolute"}>
                <FiX onClick={() => setOpenedMissingCaseInfoWindow(null)} />
                <Box
                  style={{
                    width: "max-content",
                    padding: "5px",
                    height: "100%",
                    color: "black",
                  }}
                >
                  {caseData.title}
                  <br />
                  <Box
                    className="information"
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                  >
                    <Link
                      href={caseData.link}
                      style={{ color: "red" }}
                      isExternal
                    >
                      <Text>자세히 보기</Text>
                    </Link>
                    <BiLinkExternal color="black" />
                  </Box>
                </Box>
              </Box>
            </CustomOverlayMap>
          )}
        </>
      ))}
      {/* 의문사 사건 마커 */}
      {unknown.map((caseData, index) => (
        <>
          <MapMarker
            key={index}
            position={caseData.latlng}
            image={{
              src: "./img/unknown.png", // 마커이미지의 주소입니다
              size: {
                width: 24,
                height: 35,
              }, // 마커이미지의 크기입니다
            }}
            clickable={true}
            onClick={() => setOpenedUnknownCaseInfoWindow(index)}
          />
          {openedUnknownCaseInfoWindow === index && (
            <CustomOverlayMap position={caseData.latlng}>
              <Box style={infoWindowStyle} position={"absolute"}>
                <FiX onClick={() => setOpenedUnknownCaseInfoWindow(null)} />
                <Box
                  style={{
                    width: "max-content",
                    padding: "5px",
                    height: "100%",
                    color: "black",
                  }}
                >
                  {caseData.title}
                  <br />
                  <Box
                    className="information"
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                  >
                    <Link
                      href={caseData.link}
                      style={{ color: "red" }}
                      isExternal
                    >
                      <Text>자세히 보기</Text>
                    </Link>
                    <BiLinkExternal color="black" />
                  </Box>
                </Box>
              </Box>
            </CustomOverlayMap>
          )}
        </>
      ))}
    </Map>
  );
};

export default KakaoMap;
