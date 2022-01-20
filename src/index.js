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
  colors: {
    green: {
      50: "#e6efdb",
      100: "#dae7ca",
      200: "#c1d8a6",
      300: "#a8c882",
      400: "#9bc071",
      500: "#82b04d",
      600: "#688d3e",
      700: "#4e6a2e",
      800: "#34461f",
      900: "#1a230f",
    },
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
