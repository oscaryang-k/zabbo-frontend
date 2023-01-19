import React from "react";
import { Switch } from "@headlessui/react";
import SettingList from "./Settinglist";
import ConfirmDialog from "../../components/common/ConfirmDialog";

function PageSettings() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [openFriend, setOpenFriend] = React.useState(false);
  const onAccept = () => {};
  const onCancel = () => {
    setOpenFriend(false);
  };

  const showLicence = () => {
    setOpenFriend(true);
  };
  return (
    <div className="page-content-wrapper ">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-10">
          <div className="">
            <h2 className="font-bold text-2xl mb-11">Settings</h2>
          </div>
        </div>

        <div
          className="col-span-10 pl-8 pt-8 pb-8 pr-8"
          style={{ backgroundColor: "#F5F5F5", borderRadius: 20 }}
        >
          <SettingList
            settingTitle="Profile Setting"
            gotoUrl="/settings/profile-setting"
          />
          <SettingList
            settingTitle="Notifications"
            gotoUrl="/settings/notifications"
          />
          <SettingList settingTitle="Security" gotoUrl="security" />
          <SettingList settingTitle="Preference" gotoUrl="" />
          <SettingList settingTitle="Emails" gotoUrl="" />
          <div className="flex justify-between items-center mb-5 mt-5">
            <div className="flex">
              <span className="text-base" style={{ color: "#312F2F" }}>
                Dark Mode
              </span>
            </div>
            <div className="flex">
              <Switch
                style={{
                  backgroundColor: `${darkMode ? "#000000" : "#D1D1D1"}`,
                }}
                checked={darkMode}
                onChange={setDarkMode}
                className={`
          relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${darkMode ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
          </div>
          <div className="mt-8 mb-8">
            <hr style={{ borderColor: "#FFFFFF" }} />
          </div>
          <SettingList settingTitle="App Settings" gotoUrl="" />
          <SettingList settingTitle="Help" gotoUrl="" />
          <div className="mt-8 mb-8">
            <hr style={{ borderColor: "#FFFFFF" }} />
          </div>
          <SettingList settingTitle="Privacy Policy" gotoUrl="" />
          <SettingList
            settingTitle="Terms & Conditions"
            gotoUrl="terms&conditions"
          />
          <SettingList settingTitle="Licences" />
          <div className="mt-8 mb-8">
            <hr style={{ borderColor: "#FFFFFF" }} />
          </div>
          <div className="flex" onClick={showLicence}>
            <span
              className="text-sm hover:cursor-pointer"
              style={{ color: "#312F2F" }}
            >
              V.0.1 Zabbo
            </span>
          </div>
        </div>
        <ConfirmDialog
          exit={true}
          display={openFriend}
          okButtonTitle="Accept"
          onOk={onAccept}
          onCancel={onCancel}
          title="Refer a friend"
          content="Each referred friend that creates an account and has a transaction gets up to $25 USDC in transaction fee credits"
        />
      </div>
    </div>
  );
}

export default PageSettings;
