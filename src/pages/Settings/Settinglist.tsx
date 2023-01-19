import React from "react";
import { NavLink } from "react-router-dom";
import { IconArrowForward } from "../../assets/icons";

interface propsType {
  settingTitle: string;
  gotoUrl: string;
}
const SettingList = (props: propsType) => {
  return (
    <div className="flex justify-between items-center mb-5 mt-5">
      <div className="flex flex-center">
        <span className="text-base flex" style={{ color: "#312F2F" }}>
          {props.settingTitle}
        </span>
      </div>
      <NavLink className="flex" to={props.gotoUrl}>
        <IconArrowForward></IconArrowForward>
      </NavLink>
    </div>
  );
};

SettingList.defaultProps = {
  settingTitle: "",
  gotoUrl: "",
};

export default SettingList;
