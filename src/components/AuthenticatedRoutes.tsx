import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import PageDashboard from "../pages/Dashboard/PageDashboard";

import PageContracts from "../pages/Contracts/PageContracts";
import PageOpenContracts from "../pages/Contracts/subContracts/OpenContracts";

import PageContacts from "../pages/Contacts/PageContacts";
import PageInfoContact from "../pages/Contacts/InfoContact";

import PageSettings from "../pages/Settings/PageSettings";
import PageNotifications from "../pages/Settings/SubSettings/Notifications";
import PageSecurity from "../pages/Settings/SubSettings/Security";
import PageTermsAndConditions from "../pages/Settings/SubSettings/TermsAndConditions";

function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" index element={<PageDashboard></PageDashboard>}></Route>
        <Route
          path="contracts"
          element={<PageContracts></PageContracts>}
        ></Route>
        <Route
          path="contracts/open-contracts"
          element={<PageOpenContracts></PageOpenContracts>}
        ></Route>
        <Route
          path="contacts"
          index
          element={<PageContacts></PageContacts>}
        ></Route>
        <Route
          path="contacts/about/:params"
          index
          element={<PageInfoContact></PageInfoContact>}
        ></Route>
        <Route
          path="settings"
          index
          element={<PageSettings></PageSettings>}
        ></Route>
        <Route
          path="settings/notifications"
          index
          element={<PageNotifications></PageNotifications>}
        ></Route>
        <Route
          path="settings/security"
          index
          element={<PageSecurity></PageSecurity>}
        ></Route>
        <Route
          path="settings/terms&conditions"
          index
          element={<PageTermsAndConditions></PageTermsAndConditions>}
        ></Route>
      </Route>
    </Routes>
  );
}

export default AuthenticatedRoutes;
