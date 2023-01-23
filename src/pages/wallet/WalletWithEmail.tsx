import React from "react";
import { useNavigate } from "react-router-dom";
import BaseInput from "../../components/common/BaseInput";

import SignUpHeader from "../auth/SignUp/SignUpHeader";

const WalletWithEmail = () => {
  const navigate = useNavigate();
  const [walletInfo, setWalletInfo] = React.useState({
    email: "",
    phone: "",
  });
  const checkEmailType = (email: string) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };
  const onChange = (e: any) => {
    setWalletInfo({ ...walletInfo, [e.target.name]: e.target.value });
  };
  const checkWalletInfo = () => {
    return checkEmailType(walletInfo.email) && walletInfo.phone ? false : true;
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
              Great! Please provide your email and we will send you a
              confirmation code.
            </span>
          </div>
        </div>
        <div className="w-[320px]">
          <div className="flex mr-2 mb-3 w-full">
            <BaseInput
              name="email"
              onChange={onChange}
              placeholder="Email"
              value={walletInfo.email}
            />
          </div>
          <div className="flex">
            <BaseInput
              name="phone"
              onChange={onChange}
              placeholder="Phone Number"
              value={walletInfo.phone}
            />
          </div>

          <div className="w-full flex justify-center items-center flex-col">
            <button
              type="button"
              className={`flex justify-center w-[320px]  items-center ${
                checkWalletInfo() ? "" : "bg-black"
              } rounded-lg pt-3 pb-3 mt-5 text-white cursor-pointer disabled:text-[#FFFFFF] disabled:bg-[#CCCCCC]`}
              disabled={checkWalletInfo()}
              onClick={() => {
                navigate("/signup/end-welcome");
              }}
            >
              <span>Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletWithEmail;
