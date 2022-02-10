import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = {
  congfig: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={extendTheme(theme)}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
