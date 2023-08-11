// 리액트 라이브러리
import React, { useEffect } from "react";

// 외부 라이브러리

// Chakra UI
import { Box, Text, Heading } from "@chakra-ui/react";

// 컴포넌트
import KakaoMap from "./map/map";
import DisclaimerModal from "./modal";

// ----------------------------------------------------------------------

const appStyle = {
  display: "flex",

  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  backgroundColor: "black",
};

const App: React.FC = () => {
  return (
    <Box className="App" style={appStyle} flexDirection={"column"}>
      <Box
        className="header"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading color={"white"}>cold case</Heading>
        <Text color={"white"}>대한민국 미제사건 정보</Text>
      </Box>
      <KakaoMap />
      <DisclaimerModal />
    </Box>
  );
};

export default App;
