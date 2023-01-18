import React from "react";
import SettingList from "./Settinglist";

function PageSettings() {
  return (
    <div className="page-content-wrapper mr-20 ml-20">
      <div className="grid grid-cols-12 gap-2 ">
        <div className="col-span-10">
          <div className="">
            <h2 className="font-bold text-2xl mb-11">Settings</h2>
          </div>
        </div>
      </div>
      <div
        className="col-span-10 pl-8 pt-8 pb-8 pr-8"
        style={{ backgroundColor: "#F5F5F5", borderRadius: 20 }}
      >
        <SettingList settingTitle="Profile Setting" settingUrl="" />
        <SettingList settingTitle="Notifications" settingUrl="" />
        <SettingList settingTitle="Security" settingUrl="" />
        <SettingList settingTitle="Preference" settingUrl="" />
        <SettingList settingTitle="Emails" settingUrl="" />
        <div className="flex justify-between items-center mb-5 mt-5">
          <div className="flex">
            <span className="text-base" style={{ color: "#312F2F" }}>
              Dark Mode
            </span>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
}

export default PageSettings;
