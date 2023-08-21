// 리액트 라이브러리
import React, { useState, useEffect } from "react";

// 리액트 컴포넌트
import getCurrentPosition from "./geolocation";
import CaseMarkers from "./caseMarker";

// 외부 라이브러리
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";

// Chakra UI
import {
  Box,
  Text,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
} from "@chakra-ui/react";
import {
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

// json

import sampleJSONdata from "../data/sampledata.json";

// 사건 데이터
import murderCase from "../case/murderCase"; // 살인사건 데이터
import missingCase from "../case/missingCase"; // 실종사건 데이터
import unknownCase from "../case/unknownCase"; // 의문사 사건 데이터

// 미제 사건 유형을 하나로 합침
const murder = [...murderCase];
const missing = [...missingCase];
const unknown = [...unknownCase];

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
  console.log("Section 3 content:", sampleJSONdata[0].sections[3].content);
  console.log("Section 4 content:", sampleJSONdata[0].sections[4].content);

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

  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <MapMarker position={userLocation} clickable={true} onClick={onOpen}>
        <Button onClick={onOpen}>자세히 보기</Button>
      </MapMarker>
      {isOpen && (
        <>
          <CustomOverlayMap position={userLocation}>
            <Modal
              motionPreset="none"
              isOpen={isOpen}
              onClose={onClose}
              isCentered
            >
              <ModalOverlay />
              <ModalContent
                maxWidth={"80vw"}
                maxHeight={"80vh"}
                overflowY={"scroll"}
              >
                <ModalHeader fontSize={"4xl"}>
                  {sampleJSONdata[0].title}
                </ModalHeader>
                <Box
                  className="evidencePicture"
                  display={"flex"}
                  flexWrap={"wrap"}
                >
                  <Image
                    boxSize={"max-content"}
                    src={sampleJSONdata[0].thumbnail}
                  />
                </Box>
                <ModalHeader fontSize={"3xl"}>개요</ModalHeader>
                <ModalCloseButton />
                <ModalBody fontSize={"lg"}>
                  {sampleJSONdata[0].description}
                </ModalBody>
                <ModalHeader fontSize={"2xl"}>
                  {sampleJSONdata[0].sections[0].heading}
                </ModalHeader>
                <ModalBody fontSize={"lg"}>
                  {sampleJSONdata[0].sections[0].content[0]}
                  <UnorderedList>
                    <ListItem>
                      {sampleJSONdata[0].sections[1].content[0]}
                    </ListItem>
                    <ListItem>
                      {sampleJSONdata[0].sections[1].content[1]}
                    </ListItem>
                    <ListItem>
                      {sampleJSONdata[0].sections[1].content[2]}
                    </ListItem>
                    <ListItem>
                      {sampleJSONdata[0].sections[1].content[3]}
                    </ListItem>
                    <ListItem>
                      {sampleJSONdata[0].sections[1].content[4]}
                    </ListItem>
                    <ListItem>
                      {sampleJSONdata[0].sections[1].content[5]}
                    </ListItem>
                    <ListItem>
                      {sampleJSONdata[0].sections[1].content[6]}
                    </ListItem>
                    <ListItem>
                      {sampleJSONdata[0].sections[1].content[7]}
                    </ListItem>
                    <ListItem>
                      {sampleJSONdata[0].sections[1].content[8]}
                    </ListItem>
                    <ListItem>
                      {sampleJSONdata[0].sections[1].content[9]}
                    </ListItem>
                  </UnorderedList>
                  {sampleJSONdata[0].sections[0].content[1]}
                </ModalBody>
                <ModalHeader fontSize={"2xl"}>
                  {sampleJSONdata[0].sections[2].heading}
                </ModalHeader>
                <ModalBody fontSize={"lg"}>
                  {sampleJSONdata[0].sections[2].content}
                </ModalBody>

                <ModalHeader fontSize={"2xl"}>
                  {sampleJSONdata[0].sections[3].heading}
                </ModalHeader>
                <ModalBody fontSize={"lg"}>
                  {sampleJSONdata[0].sections[3].content}
                </ModalBody>
                <ModalHeader fontSize={"2xl"}>
                  {sampleJSONdata[0].sections[4].heading}
                </ModalHeader>
                <ModalBody fontSize={"lg"}>
                  {sampleJSONdata[0].sections[4].content}
                </ModalBody>
                <ModalFooter>
                  <Button
                    transition={"none"}
                    size={"lg"}
                    backgroundColor={"black"}
                    color={"white"}
                    _hover={{ backgroundColor: "black" }}
                    onClick={onClose}
                  >
                    닫기
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </CustomOverlayMap>
        </>
      )}

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
