import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./components/Root";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <RecoilRoot>
        <Router>
          <Root />
        </Router>
      </RecoilRoot>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
