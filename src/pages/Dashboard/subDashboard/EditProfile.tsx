import React from "react";
import { NavLink } from "react-router-dom";

import { HeaderButton } from "../../../components/buttons";
import { IconUserAvatar, IconMetaMask, IconPlus } from "../../../assets/icons";
import BaseInput from "../../../components/common/BaseInput";

const EditProfile = () => {
  //   const [file, setFile] = React.useState<string>();

  const [userInfo, setUserInfo] = React.useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });
  const handleFile = (e: any) => {};
  const handleChange = (e: any) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    console.log(userInfo);
  };
  return (
    <div className="page-content-wrapper">
      <div className=" grid grid-cols-12 gap-2">
        <div className="col-span-8 flex flex-col ml-3 mr-3">
          <div className="flex  pt-12  justify-between ">
            <div className="flex items-center">
              <div className="">
                <h2 className="font-bold text-2xl">Edit Profile</h2>
              </div>
            </div>
            <NavLink
              className="hover:cursor-pointer items-center "
              style={{ position: "relative" }}
              to="/dashboard/profile"
            >
              <h2 className="font-base text-base" style={{ color: "#312F2F" }}>
                Cancel
              </h2>
            </NavLink>
          </div>

          <div className="flex flex-col items-center pt-12">
            <label className="cursor-pointer">
              <IconUserAvatar />
              <input
                type="file"
                name=""
                id=""
                hidden
                onChange={(e) => {
                  handleFile(e);
                }}
              />
              <span
                className="font-bold  text-base font-sans mb-5 mt-3"
                style={{ color: "##000000" }}
              >
                Set new photo
              </span>
            </label>
          </div>
        </div>
        <div className="col-span-8 flex flex-col mt-10 ">
          <div className="flex flex-col mb-5">
            <span className="font-bold text-sm">Personal information</span>
          </div>
          <div>
            <div className="flex mb-4 justify-between">
              <div className="w-1/2 pr-4">
                <BaseInput
                  label="First Name"
                  name="firstName"
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </div>
              <div className="w-1/2">
                <BaseInput
                  label="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex mt-5 justify-between">
              <div className="w-1/2 pr-4">
                <BaseInput
                  label="Nickname"
                  name="nickName"
                  placeholder="Nick Name"
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <BaseInput
                  label="Business name"
                  name="businessName"
                  onChange={handleChange}
                  placeholder="Business Name"
                />
              </div>
            </div>
          </div>
          <div className="col-span-8 flex flex-col mt-10 ">
            <div className="flex flex-col mb-5">
              <span className="font-bold text-sm">
                Public business information
              </span>
            </div>
            <div>
              <div className="flex mb-4 justify-between">
                <div className="w-1/2 pr-4">
                  <BaseInput
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    placeholder="You@gmail.com"
                  />
                </div>
                <div className="w-1/2">
                  <BaseInput
                    label="Phone Number"
                    name="phoneNumber"
                    onChange={handleChange}
                    placeholder="phone-number"
                  />
                </div>
              </div>
              <div className="flex mt-5 justify-between">
                <div className="w-full">
                  <div className="flex flex-col">
                    <span className="text-xs mb-1" style={{ color: "#606060" }}>
                      BIO({"142symbols max"})
                    </span>
                    <textarea
                      rows={2}
                      maxLength={142}
                      name="bio"
                      onChange={handleChange}
                      className="border rounded-lg text-base p-3 w-full"
                      style={{ backgroundColor: "#FBFBFB" }}
                      placeholder={"..."}
                    />
                  </div>
                </div>
              </div>
              <div className="flex mt-5 justify-between">
                <div className="w-full">
                  <BaseInput
                    label="Address"
                    name="address"
                    endLabel={
                      <div className="w-1/2 h-1/2 cursor-pointer">
                        <IconPlus style={{ color: "#312F2F", width: 10 }} />
                      </div>
                    }
                    placeholder="address"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <NavLink
              className="flex flex-col mb-5 mt-8"
              to={"/dashboard/profile/edit/links"}
            >
              <span className="font-bold text-sm">Links</span>
            </NavLink>
            <div>
              <div className="flex mb-4 justify-between">
                <div className="w-1/2 pr-4">
                  <BaseInput
                    label="Website"
                    name="website"
                    onChange={handleChange}
                    placeholder="http://www.***.com"
                  />
                </div>
                <div className="w-1/2">
                  <BaseInput
                    label="Social media"
                    name="social"
                    onChange={handleChange}
                    placeholder="Social media"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-8 flex flex-col">
          <div className="flex justify-between mb-1">
            <span className="text-xs mb-1" style={{ color: "#606060" }}>
              Wallet
            </span>
            <IconPlus
              style={{ color: "#312F2F", width: 10 }}
              className="cursor-pointer"
            />
          </div>
          <NavLink
            className="flex bg-gray-100 flex p-3 rounded-xl  hover:bg-black hover:text-gray-100"
            to={""}
          >
            <HeaderButton>
              <IconMetaMask />
            </HeaderButton>
            <div className="flex items-center ml-3 ">
              <span className="text-sm">Meta Mask</span>
            </div>
          </NavLink>
          <div className="flex items-center justify-center mt-8 cursor-pointer">
            <div className="flex items-center rounded-lg border pt-3 pb-3 pr-16 pl-16 border-black  hover:bg-black hover:text-gray-100">
              Save Updates
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
