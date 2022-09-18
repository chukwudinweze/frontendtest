import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { NavContextProvider } from "./store/side-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NavContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </NavContextProvider>
);

reportWebVitals();
