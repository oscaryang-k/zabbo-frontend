import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconArrowLeft } from "../../../assets/icons";
import ListWithSwitch from "../../../components/common/ListWithSwitch";

const Notifications = () => {
  const [openLastLogs, setOpenLastLogs] = useState<boolean>(false);
  const [openToSign, setOpenToSign] = useState<boolean>(false);
  const [openSigned, setOpenSigned] = useState<boolean>(true);
  const [openUpdates, setOpenUpdates] = useState<boolean>(false);
  const [openTransfer, setOpenTransfer] = useState<boolean>(false);
  const onChangeLastLogs = () => {
    setOpenLastLogs(!openLastLogs);
  };
  const onChangeToSign = () => {
    setOpenToSign(!openToSign);
  };
  const onChangeSigned = () => {
    setOpenSigned(!openSigned);
  };
  const onChangeUpdates = () => {
    setOpenUpdates(!openUpdates);
  };
  const onChangeTransfer = () => {
    setOpenTransfer(!openTransfer);
  };
  return (
    <div className="page-content-wrapper mr-20 ml-20">
      <div className=" ">
        <div className="w-[800px]">
          <div className="flex items-center">
            <NavLink to="/settings" className="flex mb-11 mr-5">
              <IconArrowLeft></IconArrowLeft>
            </NavLink>
            <div className="flex">
              <h2 className="font-bold text-2xl mb-11 items-center">
                Notifications
              </h2>
            </div>
          </div>
        </div>
        <div
          className="w-[800px] pl-8 pt-8 pb-8 pr-8"
          style={{ backgroundColor: "#F5F5F5", borderRadius: 20 }}
        >
          <div className="flex">
            <span className="flex font-bold text-sm">
              Select preferable cases for notifications
            </span>
          </div>
          <ListWithSwitch
            title="Last logs"
            checkState={openLastLogs}
            onChange={onChangeLastLogs}
          />
          <ListWithSwitch
            title="New engagement to sign"
            checkState={openToSign}
            onChange={onChangeToSign}
          />
          <ListWithSwitch
            title="Client has signed engagement"
            checkState={openSigned}
            onChange={onChangeSigned}
          />
          <ListWithSwitch
            title="Any updates about the engagement to approve"
            checkState={openUpdates}
            onChange={onChangeUpdates}
          />
          <ListWithSwitch
            title="Money transfer"
            checkState={openTransfer}
            onChange={onChangeTransfer}
          />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
