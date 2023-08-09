// 리액트 라이브러리
import React from "react";

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

const App: React.FC = () => {
  return (
    <Box className="App" style={appStyle}>
        <Text>
          <code>cold case</code>
        </Text>
    </Box>
  );
};

export default App;
