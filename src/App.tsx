// 리액트 라이브러리
import React, { useEffect } from "react";

// 외부 라이브러리

// Chakra UI
import { Box, Text } from "@chakra-ui/react";

// 컴포넌트
import KakaoMap from "./map/map";

// ----------------------------------------------------------------------

const appStyle = {
  display: "flex",
  width: "100vw",
  height: "100vh",
  backgroundColor: "black",
};

const apiKey = process.env.REACT_APP_MAPS_API;

const App: React.FC = () => {
  return (
    <Box className="App" style={appStyle}>
      <KakaoMap />
    </Box>
  );
};

export default App;
