// 리액트 라이브러리
import React, { useEffect } from "react";

// 외부 라이브러리

// Chakra UI
import { Box, Text } from "@chakra-ui/react";

// 컴포넌트
import KakaoMap from "./map/map";
import DisclaimerModal from "./modal";

// ----------------------------------------------------------------------

const appStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  backgroundColor: "black",
};

const App: React.FC = () => {
  return (
    <Box className="App" style={appStyle}>
      <KakaoMap />
      <DisclaimerModal/>
    </Box>
  );
};

export default App;
