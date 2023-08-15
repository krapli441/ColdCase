// 리액트 라이브러리
import React from "react";

// 외부 라이브러리
import { Box, Text, Link, Image } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";

// Chakra UI
import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";

// 타입 정의
interface CaseData {
  latlng: { lat: number; lng: number };
  title: string;
  link: string;
  img?: string;
}

interface CaseMarkersProps {
  cases: CaseData[];
  markerImage: { src: string; size: { width: number; height: number } };
  setOpenedCaseInfoWindow: (index: number | null) => void;
  openedCaseInfoWindow: number | null;
  infoWindowStyle: React.CSSProperties;
  setCenter: (center: { lat: number; lng: number }) => void;
}

const CaseMarkers: React.FC<CaseMarkersProps> = ({
  cases,
  markerImage,
  setOpenedCaseInfoWindow,
  openedCaseInfoWindow,
  infoWindowStyle,
  setCenter,
}) => {
  const handleMarkerClick = (
    index: number,
    latlng: { lat: number; lng: number }
  ) => {
    setCenter(latlng); // 클릭한 마커의 위치로 지도 중앙 변경
    setOpenedCaseInfoWindow(index);
  };

  return (
    <React.Fragment>
      {cases.map((caseData, index) => (
        <React.Fragment key={index}>
          <MapMarker
            key={index}
            position={caseData.latlng}
            image={markerImage}
            clickable={true}
            onClick={() => handleMarkerClick(index, caseData.latlng)}
          />
          {openedCaseInfoWindow === index && (
            <CustomOverlayMap position={caseData.latlng}>
              <Box
                className="infoWindow"
                style={infoWindowStyle}
                position={"absolute"}
                cursor={"default"}
                flexDirection={"row-reverse"}
              >
                <Box
                  className="caseInformation"
                  style={{
                    display: "flex",
                    width: "max-content",
                    padding: "5px",
                    height: "100%",
                    color: "black",
                    gap: "5px",
                  }}
                  flexDirection={"column"}
                >
                  <FiX
                    style={{ border: "1px solid black", borderRadius: "5px" }}
                    onClick={() => setOpenedCaseInfoWindow(null)}
                    cursor={"pointer"}
                  />
                  <Image boxSize={{ base: "50px", sm: "100px", md: "150px", lg: "150px" }} width={"max-content"}  src={caseData.img} />
                  <Text fontWeight={"bold"}>{caseData.title}</Text>
                  <Box
                    className="information"
                    display={"flex"}
                    justifyContent={"center"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    border={"1px solid black"}
                    borderRadius={"5px"}
                  >
                    <Link
                      href={caseData.link}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "red",
                        gap: "5px",
                      }}
                      isExternal
                    >
                      <Text>자세히 보기</Text>
                      <BiLinkExternal color="black" />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </CustomOverlayMap>
          )}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default CaseMarkers;
