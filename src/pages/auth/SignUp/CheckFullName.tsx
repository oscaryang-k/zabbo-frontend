import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BaseInput from "../../../components/common/BaseInput";

import SignUpHeader from "../SignUp/SignUpHeader";

const CheckFullName = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = React.useState({
    firstName: "",
    lastName: "",
    businessName: "",
  });
  const onChange = (e: any) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const checkUserInfo = () => {
    const result =
      userInfo.firstName !== "" &&
      userInfo.lastName !== "" &&
      userInfo.businessName !== ""
        ? false
        : true;
    return result;
  };

  return (
    <>
      <div>
        <SignUpHeader />
      </div>
      <div className="flex justify-center items-center flex-col mt-40 ">
        <div className="w-[576px] ">
          <div className="flex mb-16 flex-col items-center">
            <span className="text-2xl text-center  ">
              Would you like to add any personal info to your profile? You can
              always do this later.
            </span>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex justify-between">
            <div className="flex mr-2">
              <BaseInput
                name="firstName"
                onChange={onChange}
                placeholder="First Name"
                value={userInfo.firstName}
              />
            </div>
            <div className="flex">
              <BaseInput
                name="lastName"
                onChange={onChange}
                placeholder="Last Name"
                value={userInfo.lastName}
              />
            </div>
          </div>
          <div className=" w-full mt-3">
            <BaseInput
              name="businessName"
              onChange={onChange}
              placeholder="Business Name"
              value={userInfo.businessName}
            />
          </div>
          <div className="w-full flex justify-center items-center flex-col">
            <button
              type="button"
              className={`flex justify-center w-[320px]  items-center ${
                checkUserInfo() ? "" : "bg-black"
              } rounded-lg pt-3 pb-3 mt-8 text-white cursor-pointer disabled:text-[#FFFFFF] disabled:bg-[#CCCCCC]`}
              disabled={checkUserInfo()}
              onClick={() => {
                navigate("/signup/end-welcome");
              }}
            >
              <span>Next</span>
            </button>
            <div className="flex mt-3 text-[#9c9c9c]">
              <NavLink to={"/"}>
                <span>{"Skip"}</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckFullName;
