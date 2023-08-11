// 리액트 라이브러리
import React, { useState, useEffect } from "react";

// 리액트 컴포넌트
import getCurrentPosition from "./geolocation";

// 외부 라이브러리
import { Map, MapMarker } from "react-kakao-maps-sdk";

// Chakra UI
import { Box, Text, Spinner, Image, Link } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";

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
  const [hoveredMurderCase, setHoveredCase] = useState<number | null>(null);
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

      {/* ! 살인사건 마커 ! */}
      {murder.map((caseData, index) => (
        <MapMarker
          key={index}
          position={caseData.latlng}
          onMouseOver={() => {
            if (openedMurderCaseInfoWindow !== index) {
              setHoveredCase(index); // 마우스 오버 이벤트
            }
          }}
          onMouseOut={() => setHoveredCase(null)} // 마우스 아웃 이벤트
          image={{
            src: "./img/kill.png", // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35,
            }, // 마커이미지의 크기입니다
          }}
          clickable={true}
          onClick={() => setOpenedMurderCaseInfoWindow(index)}
        >
          {openedMurderCaseInfoWindow === index && (
            <Box
              style={{
                display: "flex",
                padding: "5px",
                color: "#000",
                flexDirection: "row-reverse",
              }}
            >
              <Image
                alt="close"
                boxSize={"15px"}
                src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                style={{
                  // position: "absolute",
                  right: "5px",
                  top: "5px",
                  cursor: "pointer",
                }}
                onClick={() => setOpenedMurderCaseInfoWindow(null)}
              />
              <Box
                style={{
                  width: "150px",
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
          )}
        </MapMarker>
      ))}
      {/* 실종사건 마커 */}
      {missing.map((caseData, index) => (
        <MapMarker
          key={index}
          position={caseData.latlng}
          onMouseOver={() => {
            if (openedMissingCaseInfoWindow !== index) {
              setHoveredCase(index); // 마우스 오버 이벤트
            }
          }}
          onMouseOut={() => setHoveredCase(null)} // 마우스 아웃 이벤트
          image={{
            src: "./img/missing.png", // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35,
            }, // 마커이미지의 크기입니다
          }}
          clickable={true}
          onClick={() => setOpenedMissingCaseInfoWindow(index)}
        >
          {openedMissingCaseInfoWindow === index && (
            <Box
              style={{
                display: "flex",
                padding: "5px",
                color: "#000",
                flexDirection: "row-reverse",
              }}
            >
              <Image
                alt="close"
                boxSize={"15px"}
                src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                style={{
                  // position: "absolute",
                  right: "5px",
                  top: "5px",
                  cursor: "pointer",
                }}
                onClick={() => setOpenedMissingCaseInfoWindow(null)}
              />
              <Box
                style={{
                  width: "150px",
                  height: "100%",
                  color: "black",
                }}
              >
                {caseData.title}
                <br/>
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
          )}
        </MapMarker>
      ))}
      {/* 의문사 사건 마커 */}
      {unknown.map((caseData, index) => (
        <MapMarker
          key={index}
          position={caseData.latlng}
          onMouseOver={() => {
            if (openedMissingCaseInfoWindow !== index) {
              setHoveredCase(index); // 마우스 오버 이벤트
            }
          }}
          onMouseOut={() => setHoveredCase(null)} // 마우스 아웃 이벤트
          image={{
            src: "./img/unknown.png", // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35,
            }, // 마커이미지의 크기입니다
          }}
          clickable={true}
          onClick={() => setOpenedUnknownCaseInfoWindow(index)}
        >
          {openedUnknownCaseInfoWindow === index && (
            <Box
              style={{
                display: "flex",
                padding: "5px",
                color: "#000",
                flexDirection: "row-reverse",
              }}
            >
              <Image
                alt="close"
                boxSize={"15px"}
                src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                style={{
                  // position: "absolute",
                  right: "5px",
                  top: "5px",
                  cursor: "pointer",
                }}
                onClick={() => setOpenedUnknownCaseInfoWindow(null)}
              />
              <Box
                style={{
                  width: "150px",
                  height: "100%",
                  color: "black",
                }}
              >
                {caseData.title}
                <br/>
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
          )}
        </MapMarker>
      ))}
    </Map>
  );
};

export default KakaoMap;
