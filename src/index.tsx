import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./Components/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
