import React from "react";
import {
  MainLogo,
  DashBoardSVG,
  SettingsSVG,
  ContractsSVG,
  ContactsSVG,
} from "../assets/icons";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="main-logo">
        <MainLogo />
      </div>
      <div className="sidebar-nav sidebar-nav-dashboard">
        <DashBoardSVG />
        <div className="sidebar-nav-title ">Dashboard</div>
        {/* <div>Dashboard</div> */}
      </div>
      <div className="sidebar-nav sidebar-nav-contracts">
        <ContractsSVG />
        <div className="sidebar-nav-title">Contracts</div>
      </div>
      <div className="sidebar-nav sidebar-nav-contacts">
        <ContactsSVG />
        <div className="sidebar-nav-title">Contacts</div>
      </div>
      <div className="sidebar-nav sidebar-nav-settings">
        <SettingsSVG />
        <div className="sidebar-nav-title">Settings</div>
      </div>
    </div>
  );
}

export default Sidebar;
