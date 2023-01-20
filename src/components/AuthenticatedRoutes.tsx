import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import PageSettings from "../pages/Settings/PageSettings";
import PageContacts from "../pages/Contacts/PageContacts";
import PageInfoContact from "../pages/Contacts/InfoContact";
import PageContracts from "../pages/Contracts/PageContracts";
import PageDashboard from "../pages/Dashboard/PageDashboard";
import PageLinks from "../pages/Dashboard/subDashboard/Links";
import PageReport from "../pages/Dashboard/subDashboard/Report";
import PageProfile from "../pages/Dashboard/subDashboard/Profile";
import PageSecurity from "../pages/Settings/SubSettings/Security";
import Transactions from "../pages/Dashboard/subDashboard/Transactions";
import PageContactHistory from "../pages/Contracts/subContracts/history";
import PageEditProfile from "../pages/Dashboard/subDashboard/EditProfile";
import PageNotifications from "../pages/Settings/SubSettings/Notifications";
import PageContractDetail from "../pages/Contracts/subContracts/ContractDetail";
import PageDetailTransaction from "../pages/Dashboard/subDashboard/DetailTransaction";
import PageTermsAndConditions from "../pages/Settings/SubSettings/TermsAndConditions";
function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/dashboard" index element={<PageDashboard />} />
        <Route
          index
          path="/dashboard/transactions"
          element={<Transactions />}
        />
        <Route
          index
          path="/dashboard/transaction"
          element={<PageDetailTransaction />}
        />
        <Route index path="/dashboard/report" element={<PageReport />} />
        <Route index path="/dashboard/profile" element={<PageProfile />} />
        <Route
          index
          path="/dashboard/profile/edit"
          element={<PageEditProfile />}
        />
        <Route
          index
          path="/dashboard/profile/edit/links"
          element={<PageLinks />}
        />
        <Route path="contracts" index element={<PageContracts />} />
        <Route
          index
          path="contracts/:params"
          element={<PageContractDetail />}
        />
        <Route
          path="contracts/history"
          index
          element={<PageContactHistory />}
        />
        <Route path="contacts" index element={<PageContacts />} />
        <Route path="contacts/about" index element={<PageInfoContact />} />
        <Route path="settings" index element={<PageSettings />} />
        <Route
          path="settings/notifications"
          index
          element={<PageNotifications />}
        />
        <Route path="settings/security" index element={<PageSecurity />} />
        <Route
          path="settings/terms&conditions"
          index
          element={<PageTermsAndConditions />}
        />
      </Route>
    </Routes>
  );
}

export default AuthenticatedRoutes;
