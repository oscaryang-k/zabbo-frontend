import React from "react";
import { Tab } from "@headlessui/react";
import PhoneInput from "react-phone-input-2";

import BaseInput from "../../components/common/BaseInput";
import { IconApple, IconGoogle, MainLogo } from "../../assets/icons";

import "./SignIn.scss";
import { NavLink } from "react-router-dom";
// import "react-phone-input-2/lib/style.css";

const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};
const SignIn = () => {
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const onEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const onPhone = (e: any) => {
    setPhone(e.target.value);
  };
  return (
    <>
      <div className="fixed mt-11 ml-10">
        <MainLogo />
      </div>
      <div className="flex justify-center">
        <div className="w-80">
          <div className="items-center flex justify-center mt-20">
            <span className="font-bold " style={{ fontSize: 32 }}>
              Sign In
            </span>
          </div>
          <div className="w-full max-w-md sm:px-0">
            <Tab.Group>
              <Tab.List className="flex space-x-1 mb-12 rounded-[100px] bg-[#82AA47] p-1">
                <Tab
                  key={"email"}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-[100px] py-2.5 text-sm font-medium leading-5 text-[rgba(255, 255, 255, 0.8)]",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:rounded-[100px] focus:text-[#82AA47]",
                      selected
                        ? "bg-white shadow text-[#82AA47]"
                        : "text-[#E6DDEA] hover:bg-white/[0.12] hover:text-white "
                    )
                  }
                >
                  {"Email"}
                </Tab>
                <Tab
                  key={"phone"}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-[100px] py-2.5 text-sm font-medium leading-5 text-[rgba(255, 255, 255, 0.8)]",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:rounded-[100px]",
                      selected
                        ? "bg-white shadow text-[#82AA47]"
                        : "text-[#E6DDEA] hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {"Phone"}
                </Tab>
              </Tab.List>
              <Tab.Panels className="px-3">
                <Tab.Panel
                  key={"email"}
                  className={classNames(
                    "rounded-xl  ",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none "
                  )}
                >
                  <BaseInput
                    name="email"
                    value={email}
                    onChange={onEmail}
                    placeholder="Enter Email"
                  />
                  <div className="flex items-center justify-center  rounded-lg border pt-3 pb-3 mt-5 border-black cursor-pointer  hover:bg-black hover:text-gray-100">
                    <span>Continue</span>
                  </div>
                </Tab.Panel>
                <Tab.Panel
                  key={"phone"}
                  className={classNames(
                    "rounded-xl  ",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none "
                  )}
                >
                  <div className="mt-5">
                    <PhoneInput
                      country={"us"}
                      value={phone}
                      placeholder=""
                      specialLabel=""
                      onChange={onPhone}
                    />
                  </div>

                  <div className="flex items-center justify-center  rounded-lg border pt-3 pb-3 mt-5 border-black cursor-pointer  hover:bg-black hover:text-gray-100">
                    <span>Continue</span>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>

          <hr className="hr-text mt-10 mb-10" data-content="Or" />
          <div className=" flex justify-center items-center  rounded-lg border border-black pt-2 pb-2 cursor-pointer">
            <IconGoogle />
            <span>Sign in with Google</span>
          </div>
          <div className=" flex justify-center items-center bg-black rounded-lg border border-black pt-2 pb-2 mt-4 text-white cursor-pointer">
            <IconApple />
            <span>Sign in with Google</span>
          </div>
          <div className="flex justify-center items-center mt-20 ">
            <span>
              Don’t have an account yet?
              <NavLink style={{ color: "#82AA47" }} to={"/signup"}>
                Sign Up
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
