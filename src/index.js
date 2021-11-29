import React from "react";
import { render } from "react-dom";
import App from "./app";
import { Firebase } from "./contexts/firebaseContext";
import { GlobalStyles } from "./global-styles";

render(
  <>
    <Firebase>
      <GlobalStyles />
      <App />
    </Firebase>
  </>,
  document.getElementById("root")
);
