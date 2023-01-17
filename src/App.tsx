import React from "react";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./components/Routes";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes></MainRoutes>
    </BrowserRouter>
  );
}

export default App;
