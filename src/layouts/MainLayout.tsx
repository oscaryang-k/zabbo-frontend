import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function MainLayout() {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="page-container">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default MainLayout;
