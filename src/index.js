import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./GlobalStyles/globalStyle";
import { styleOptions } from "./GlobalStyles/styleOptions";

ReactDOM.render(
  <>
    <ThemeProvider theme={styleOptions}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
