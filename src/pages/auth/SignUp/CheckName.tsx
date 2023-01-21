import React from "react";
import SignupHeader from "../SignUp/SignUpHeader";

const CheckName = () => {
  return (
    <>
      <div>
        <SignupHeader />
      </div>
      <div className="flex justify-center items-center flex-col mt-40 ">
        <div className="w-[576px]">
          <div className="flex mb-16 flex-col items-center">
            <span className="text-2xl ">
              That was easy. What should we call you?
              <br />
              Please, select a username.
            </span>
            <span className="text-2xl">johndoe@gmai font-boldl.com</span>
          </div>

          <div className="flex justify-center items-center flex-col m"></div>
        </div>
      </div>
    </>
  );
};

export default CheckName;
