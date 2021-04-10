import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

// recupera o ponto de entrada da aplicação
const rootElement = document.getElementById("root");
// render element = App
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
