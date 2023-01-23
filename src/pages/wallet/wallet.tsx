import React from "react";
import { NavLink } from "react-router-dom";

import { IconEmail } from "../../assets/icons";
import SignUpHeader from "../auth/SignUp/SignUpHeader";

const MainWallet = () => {
  return (
    <>
      <div>
        <SignUpHeader />
      </div>
      <div className="flex justify-center items-center flex-col mt-40  ">
        <div className="w-[576px] flex items-center justify-center flex-col ">
          <div className="flex mb-16">
            <span className="text-2xl text-center  ">
              Hi, I’m Wren and I want to welcome you to your incognito Zabbo
              onboarding.
            </span>
          </div>
          <div className="flex w-[431px] items-center justify-center ">
            <span className="text-center text-2xl">
              All you need to create your account is a wallet address.
            </span>
          </div>

          <div className="flex justify-center items-center flex-col ">
            <NavLink
              to={"/wallet/connect/choose-wallet"}
              className="w-[320px] h-[48px] mr-3 pt-2 pb-2 mt-4 flex justify-center items-center bg-[#EAFFC7] rounded-lg text-sm  text-black cursor-pointer"
            >
              <IconEmail /> <span className="ml-3 text-sm">Connect wallet</span>
            </NavLink>
            <div className="flex mt-3 text-[#82AA47]">
              <NavLink to={"/wallet/connect/email"}>
                <span>{"Want to sign up via email/phone number?"}</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainWallet;
