import React from "react";
import { NavLink } from "react-router-dom";
import { IconArrowForward } from "../../assets/icons";

interface propsType {
  settingTitle: string;
  settingUrl: string;
}
const SettingList = (props: propsType) => {
  return (
    <div className="flex justify-between items-center mb-5 mt-5">
      <div className="flex">
        <span className="text-base" style={{ color: "#312F2F" }}>
          {props.settingTitle}
        </span>
      </div>
      <NavLink className="flex" to={props.settingUrl}>
        <IconArrowForward></IconArrowForward>
      </NavLink>
    </div>
  );
};

SettingList.defaultProps = {
  settingTitle: "",
  settingUrl: "",
};

export default SettingList;
