import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import PageSignIn from "../pages/auth/SignIn/SignIn";
import PageSignUp from "../pages/auth/SignUp/SignUp";
import PageWelcome from "../pages/welcome/Welcome";
import PageSettings from "../pages/Settings/PageSettings";
import PageContacts from "../pages/Contacts/PageContacts";
import PageCheckName from "../pages/auth/SignUp/CheckName";
import PageVerifyByEmail from "../pages/auth/SignIn/VerifyByEmail";
import PageInfoContact from "../pages/Contacts/InfoContact";
import PageContracts from "../pages/Contracts/PageContracts";
import PageDashboard from "../pages/Dashboard/PageDashboard";
import PageLinks from "../pages/Dashboard/subDashboard/Links";
import PageReport from "../pages/Dashboard/subDashboard/Report";
import PageProfile from "../pages/Dashboard/subDashboard/Profile";
import PageSecurity from "../pages/Settings/SubSettings/Security";
import PageSignUpWithEmail from "../pages/auth/SignUp/SignUpWithEmail";
import Transactions from "../pages/Dashboard/subDashboard/Transactions";
import PageContactHistory from "../pages/Contracts/subContracts/history";
import PageEditProfile from "../pages/Dashboard/subDashboard/EditProfile";
import PageNotifications from "../pages/Settings/SubSettings/Notifications";
import PageContractDetail from "../pages/Contracts/subContracts/ContractDetail";
import PageCheckEmailVerifyCode from "../pages/auth/SignUp/CheckEmailVerifyCode";
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
          path="/contracts/:params"
          element={<PageContractDetail />}
        />
        <Route
          path="/contracts/history"
          index
          element={<PageContactHistory />}
        />
        <Route path="/contacts" index element={<PageContacts />} />
        <Route path="/contacts/about" element={<PageInfoContact />} />
        <Route path="/settings" index element={<PageSettings />} />
        <Route
          path="/settings/notifications"
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
      <Route path="/signin" index element={<PageSignIn />}></Route>
      <Route
        path="/signin/verify-by-email"
        index
        element={<PageVerifyByEmail />}
      />
      <Route path="/signup" index element={<PageSignUp />}></Route>
      <Route
        path="/signup/with-email"
        index
        element={<PageSignUpWithEmail />}
      ></Route>
      <Route
        path="/signup/email-verify"
        index
        element={<PageCheckEmailVerifyCode />}
      />
      <Route
        path="/signup/check-name"
        index
        element={<PageCheckName />}
      ></Route>
      <Route path="/" index element={<PageWelcome />} />
    </Routes>
  );
}

export default AuthenticatedRoutes;
