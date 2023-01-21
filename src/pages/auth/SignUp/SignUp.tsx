import React from "react";
import { NavLink } from "react-router-dom";
import {
  IconApple,
  IconEmail,
  IconGoogle,
  IconPhone,
} from "../../../assets/icons";
import SignUpHeader from "./SignUpHeader";

const SignUp = () => {
  return (
    <>
      <div>
        <SignUpHeader />
      </div>
      <div className="flex justify-center items-center flex-col mt-40  ">
        <div className="flex items-center justify-center w-[576px] flex-col">
          <div className="flex items-center justify-center text-center">
            <span className="text-2xl">
              Hi, I’m Hannah and I am going to guide you through creating your
              Zabbo Profile.
            </span>
          </div>
          <div className="flex items-center text-center w-[431px] mt-8">
            <span className="text-2xl">
              How would you like to sign-up for your account?
            </span>
          </div>
          <div className="flex flex-col items-center mb-3">
            <div className="flex justify-between">
              <NavLink
                to={"/signup/with-email"}
                className="w-[167px] h-[48px] mr-3 pt-2 pb-2 mt-4 flex justify-center items-center bg-[#EAFFC7] rounded-lg text-sm  text-black cursor-pointer"
              >
                <IconEmail /> <span className="ml-3">Email</span>
              </NavLink>
              <NavLink
                to={""}
                className="w-[167px] h-[48px] pt-2 pb-2 mt-4 flex justify-center items-center bg-[#EAFFC7] rounded-lg  text-sm text-black cursor-pointer"
              >
                <IconPhone />
                <span className="ml-3">Phone Number</span>
              </NavLink>
            </div>
            <div className="flex justify-between">
              <NavLink
                to={""}
                className="w-[167px] h-[48px] mr-3 pt-2 pb-2 mt-4 flex justify-center items-center border border-black bg-white rounded-lg  text-sm text-black cursor-pointer"
              >
                <IconGoogle /> <span className="ml-3">Google</span>
              </NavLink>
              <NavLink
                to={""}
                className="w-[167px] h-[48px] pt-2 pb-2 mt-4 flex justify-center items-center bg-black rounded-lg  text-sm text-white cursor-pointer"
              >
                <IconApple /> <span className="ml-3">Apple</span>
              </NavLink>
            </div>
          </div>

          <NavLink to={""} style={{ color: "#82AA47" }}>
            Want to connect via wallet?
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SignUp;
