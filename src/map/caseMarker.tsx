import { Box, Text, Link } from "@chakra-ui/react";
import React from "react";
import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import { FiX } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";

// 타입 정의
interface CaseData {
  latlng: { lat: number; lng: number };
  title: string;
  link: string;
}

interface CaseMarkersProps {
  cases: CaseData[];
  markerImage: { src: string; size: { width: number; height: number } };
  setOpenedCaseInfoWindow: (index: number | null) => void;
  openedCaseInfoWindow: number | null;
  infoWindowStyle: React.CSSProperties;
}

// CaseMarkers 컴포넌트
const CaseMarkers: React.FC<CaseMarkersProps> = ({
  cases,
  markerImage,
  setOpenedCaseInfoWindow,
  openedCaseInfoWindow,
  infoWindowStyle,
}) => (
  <React.Fragment>
    {cases.map((caseData, index) => (
      <>
        <MapMarker
          key={index}
          position={caseData.latlng}
          image={markerImage}
          clickable={true}
          onClick={() => setOpenedCaseInfoWindow(index)}
        />
        {openedCaseInfoWindow === index && (
          <CustomOverlayMap position={caseData.latlng}>
            <Box
              style={infoWindowStyle}
              position={"absolute"}
              cursor={"default"}
            >
              <FiX
                style={{ border: "1px solid black", borderRadius: "5px" }}
                onClick={() => setOpenedCaseInfoWindow(null)}
                cursor={"pointer"}
              />
              <Box
                style={{
                  width: "max-content",
                  padding: "5px",
                  height: "100%",
                  color: "black",
                }}
              >
                <Text fontWeight={"bold"}>{caseData.title}</Text>
                <Box
                  className="information"
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
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
      </>
    ))}
  </React.Fragment>
);

export default CaseMarkers;
