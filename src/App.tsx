// 리액트 라이브러리
import React, { useEffect } from "react";

// 외부 라이브러리

// Chakra UI
import { Box, Text } from "@chakra-ui/react";

// 컴포넌트

// ----------------------------------------------------------------------

const appStyle = {
  display: "flex",
  width: "100vw",
  height: "100vh",
  backgroundColor: "black",
};

const apiKey = process.env.REACT_APP_MAPS_API;

const App: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services,clusterer`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Box className="App" style={appStyle}>
      <Text>
        <code>cold case</code>
      </Text>
    </Box>
  );
};

export default App;
