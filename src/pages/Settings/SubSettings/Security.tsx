import React from "react";
import { NavLink } from "react-router-dom";
import { IconArrowLeft } from "../../../assets/icons";
import ListWithSwitch from "../../../components/common/ListWithSwitch";

const Security = () => {
  const [openSmsOrEmail, setOpenSmsOrEmail] = React.useState<boolean>(false);
  const [openFace, setOpenFace] = React.useState<boolean>(false);
  const [openPassCode, setOpenPassCode] = React.useState<boolean>(true);

  const onChangeSmsOrEmail = () => {
    setOpenSmsOrEmail(!openSmsOrEmail);
    console.log(openSmsOrEmail);
  };
  const onChangeFace = () => {
    setOpenFace(!openFace);
  };
  const onChangePassCode = () => {
    setOpenPassCode(!openPassCode);
  };

  return (
    <div className="page-content-wrapper ">
      <div className=" grid grid-cols-12 gap-2">
        <div className="col-span-10">
          <div className="flex items-center">
            <NavLink to="/settings" className="flex mb-11 mr-5">
              <IconArrowLeft></IconArrowLeft>
            </NavLink>
            <div className="flex">
              <h2 className="font-bold text-2xl mb-11 items-center">
                Security
              </h2>
            </div>
          </div>
        </div>
        <div
          className="col-span-10 pl-8 pt-8 pb-8 pr-8"
          style={{ backgroundColor: "#F5F5F5", borderRadius: 20 }}
        >
          <div className="flex">
            <span className="flex font-bold text-sm">
              Choose at least one method for the App locking.
            </span>
          </div>
          <ListWithSwitch
            title="Code via sms or email"
            checkState={openSmsOrEmail}
            onChange={onChangeSmsOrEmail}
            // onFalse={onFasleSmsOrEmail}
          />
          <ListWithSwitch
            title="Face/Print ID"
            checkState={openFace}
            onChange={onChangeFace}
          />
          <ListWithSwitch
            title="Passcode"
            checkState={openPassCode}
            onChange={onChangePassCode}
          />
        </div>
      </div>
    </div>
  );
};

export default Security;
