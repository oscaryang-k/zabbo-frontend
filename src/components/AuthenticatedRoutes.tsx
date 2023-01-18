import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import PageDashboard from "../pages/Dashboard/PageDashboard";
import PageContracts from "../pages/Contracts/PageContracts";
import PageContacts from "../pages/Contacts/PageContacts";
import PageSettings from "../pages/Settings/PageSettings";

function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" index element={<PageDashboard></PageDashboard>}></Route>
        <Route path="contracts" index element={<PageContracts></PageContracts>}></Route>
        <Route path="contacts" index element={<PageContacts></PageContacts>}></Route>
        <Route path="settings" index element={<PageSettings></PageSettings>}></Route>
      </Route>
    </Routes>
  );
}

export default AuthenticatedRoutes;
