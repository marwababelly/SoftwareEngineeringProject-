import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Wrapper from "./layout/components/wrapper/wrapper.component";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./layout/components/sidebar/sidebar.component";
import Topnav from "./layout/components/topnav/topnav.component";
import Popup from "./components/base/popup/popup.component";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Wrapper>
      <BrowserRouter>
        <Popup />
        <Sidebar />
        <div className="Layout_Content">
          <Topnav />
          <Routes />
        </div>
      </BrowserRouter>
    </Wrapper>
  </React.StrictMode>
);

reportWebVitals();
