import React from "react";
import { useNavigate } from "react-router-dom";

import CheckBox from "../../../components/common/CheckBox";
import SignUpHeader from "../SignUp/SignUpHeader";

const SelectOption = () => {
  const navigate = useNavigate();
  const [options, setOptions] = React.useState({
    needPaid: true,
    NFT: false,
    answer: false,
  });
  const onChange = (name: string, checked: boolean) => {
    setOptions({ ...options, [name]: !checked });
  };
  return (
    <>
      <div>
        <SignUpHeader />
      </div>
      <div className="flex justify-center items-center flex-col mt-40 ">
        <div className="col-span-3">
          <div className="flex mb-16 flex-col items-center">
            <span className="text-2xl text-center ">
              <span className="font-bold">@johndoe,</span>
              {" don’t you mind telling us how you plan to use Zabbo?"}
            </span>
          </div>

          <div className="flex justify-center items-center flex-col m">
            <div className="w-[320px]">
              <div className="flex mb-3">
                <CheckBox
                  name="needPaid"
                  checked={options.needPaid}
                  title={"💰 I need to get paid"}
                  onChange={() => {
                    onChange("needPaid", options.needPaid);
                  }}
                />
              </div>

              <div className="flex mb-3">
                <CheckBox
                  name="NFT"
                  checked={options.NFT}
                  title={"🎨 Swap an NFT"}
                  onChange={() => {
                    onChange("NFT", options.NFT);
                  }}
                />
              </div>

              <div className="flex ">
                <CheckBox
                  name="answer"
                  checked={options.answer}
                  title={"Don’t want to answer"}
                  onChange={() => {
                    onChange("answer", options.answer);
                  }}
                />
              </div>
            </div>

            <button
              type="button"
              className={`flex justify-center w-[320px]  items-center ${"bg-black"} rounded-lg pt-3 pb-3 mt-8 text-white cursor-pointer disabled:text-[#FFFFFF] disabled:bg-[#CCCCCC]`}
              onClick={(e) => {
                navigate("/signup/check-fullname");
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

export default SelectOption;
