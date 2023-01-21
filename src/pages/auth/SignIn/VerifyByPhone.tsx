// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

// import BaseInput from "../../components/common/BaseInput";
import { MainLogo } from "../../../assets/icons";

import "./SignIn.scss";
// import "react-phone-input-2/lib/style.css";

const VerifyByPhone = () => {
  return (
    <>
      <div className="fixed mt-11 ml-10">
        <MainLogo />
      </div>
      <div
        className="h-full  "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="w-80">
          <div className="flex justify-center items-center mt-20 ">
            <span>
              Don’t have an account yet?
              <span style={{ color: "#82AA47" }}>Sign Up</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyByPhone;
