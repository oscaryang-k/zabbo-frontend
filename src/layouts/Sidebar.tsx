import React from "react";
import { NavLink } from "react-router-dom";
import {
  MainLogo,
  IconDashboard,
  IconContracts,
  IconContacts,
  IconSettings,
} from "../assets/icons";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="main-logo">
        <MainLogo />
      </div>
      <div className="sidebar-navigation">
        <NavLink className="sidebar-nav-link" to="/dashboard">
          <IconDashboard></IconDashboard>
          <span>Dashboard</span>
        </NavLink>
        <NavLink className="sidebar-nav-link" to="/contracts">
          <IconContracts></IconContracts>
          <span>Contracts</span>
        </NavLink>
        <NavLink className="sidebar-nav-link" to="/contacts">
          <IconContacts></IconContacts>
          <span>Contacts</span>
        </NavLink>
        <NavLink className="sidebar-nav-link" to="/settings">
          <IconSettings></IconSettings>
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
