import { MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import React from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";

interface CaseMarkerProps {
  caseData: any;
  index: number;
  imageSrc: string;
  openedInfoWindow: {
    caseData: any;
    position: { lat: number; lng: number };
  } | null;
  setOpenedInfoWindow: (
    value: { caseData: any; position: { lat: number; lng: number } } | null
  ) => void;
}

const CaseMarker: React.FC<CaseMarkerProps> = ({
  caseData,
  index,
  imageSrc,
  openedInfoWindow,
  setOpenedInfoWindow,
}) => {
  return (
    <MapMarker
      key={index}
      position={caseData.latlng}
      image={{ src: imageSrc, size: { width: 24, height: 35 } }}
      clickable={true}
      onClick={() =>
        setOpenedInfoWindow({ caseData, position: caseData.latlng })
      }
    >
      {openedInfoWindow && openedInfoWindow.caseData.id === index && (
        <Box>
          {caseData.title}
          <br />
          <Box
            className="information"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Link href={caseData.link} isExternal>
              <Text>자세히 보기</Text>
            </Link>
            <BiLinkExternal color="black" />
          </Box>
        </Box>
      )}
    </MapMarker>
  );
};

export default CaseMarker;
