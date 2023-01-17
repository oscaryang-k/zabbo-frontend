import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import PageDashboard from "../pages/Dashboard/PageDashboard";

function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" index element={<PageDashboard></PageDashboard>}></Route>
      </Route>
    </Routes>
  );
}

export default AuthenticatedRoutes;
