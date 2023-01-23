import React from "react";
import { useNavigate } from "react-router-dom";

import SignupHeader from "../SignUp/SignUpHeader";
import BaseInput from "../../../components/common/BaseInput";

const CheckName = () => {
  const [userName, setUserName] = React.useState("");
  const onChange = (e: any) => {
    setUserName(e.target.value);
  };
  const navigate = useNavigate();
  return (
    <>
      <div>
        <SignupHeader />
      </div>
      <div className="flex justify-center items-center flex-col mt-40 ">
        <div className="w-[576px]">
          <div className="flex mb-16 flex-col items-center">
            <span className="text-2xl text-center ">
              That was easy. What should we call you?
              <br />
              Please, select a username.
            </span>
          </div>

          <div className="flex justify-center items-center flex-col m">
            <div className="w-[320px]">
              <BaseInput
                onChange={onChange}
                placeholder="Name"
                autoFocus={true}
                value={userName}
              />
            </div>

            <button
              type="button"
              className={`flex justify-center w-[320px]  items-center ${"bg-black"} rounded-lg pt-3 pb-3 mt-8 text-white cursor-pointer disabled:text-[#FFFFFF] disabled:bg-[#CCCCCC]`}
              onClick={() => navigate("/signup/select-options")}
            >
              <span>Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckName;
