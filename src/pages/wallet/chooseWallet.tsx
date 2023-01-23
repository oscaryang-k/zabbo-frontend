import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Search from "../../components/common/Search";
import { HeaderButton } from "../../components/buttons";
import { IconArrowLeft, IconMetaMask } from "../../assets/icons";

const ChooseWallet = () => {
  const [search, setSearch] = React.useState("");
  const onChange = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="flex  items-center flex-col ">
        <div className="w-[576px] flex items-center  flex-col mt-11 ">
          <div className="flex">
            <NavLink className="flex items-center  mr-5" to="/wallet">
              <IconArrowLeft></IconArrowLeft>
            </NavLink>

            <h2 className="font-bold text-2xl">Choose Your Wallet</h2>
          </div>
          <div className="w-[576px] mt-11">
            <Search
              name="search"
              value={search}
              onChange={onChange}
              placeholder="Search"
            />
          </div>
          <div className="w-full mt-8 ">
            <div className="flex bg-[#FBFBFB] flex p-3 rounded-xl w-full border border-[#82AA47]">
              <HeaderButton>
                <IconMetaMask />
              </HeaderButton>
              <div className="flex items-center ml-3">
                <span className="text-sm">Meta Mask</span>
              </div>
            </div>
            <div className="flex bg-gray-100 flex p-3 rounded-xl w-full mt-3">
              <HeaderButton>
                <IconMetaMask />
              </HeaderButton>
              <div className="flex items-center ml-3">
                <span className="text-sm">Jurat</span>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center  rounded-lg border border-black mr-3 pt-2 pb-2 w-[576px]  bottom-10 fixed cursor-pointer">
            <span>{"Confirm"}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseWallet;
