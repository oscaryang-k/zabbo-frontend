import React from "react";

import SignupHeader from "./SignUp/SignUpHeader";
import BaseInput from "../../components/common/BaseInput";

const SignUp = () => {
  const [email, setEmail] = React.useState<string>("");

  const checkEmailType = (email: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };
  return (
    <>
      <div>
        <SignupHeader />
      </div>
      <div className="flex justify-center items-center flex-col mt-40 ">
        <div className="w-[576px]">
          <div className="flex mb-16">
            <span className="text-2xl ">
              Great! Please provide your email and we will send you a
              confirmation code.
            </span>
          </div>

          <div className="flex justify-center items-center flex-col m">
            <div className="w-[320px]">
              <BaseInput
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
              />
            </div>
            <button
              type="button"
              className={`flex justify-center w-[320px]  items-center ${
                email ? "bg-black" : ""
              } rounded-lg pt-2 pb-2 mt-8 text-white cursor-pointer disabled:text-[#FFFFFF] disabled:bg-[#CCCCCC]`}
              disabled={checkEmailType(email) ? false : true}
            >
              <span>Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
