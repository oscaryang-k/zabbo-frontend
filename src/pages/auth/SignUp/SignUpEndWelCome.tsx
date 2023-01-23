import { useNavigate } from "react-router-dom";

import { IconWelcome } from "../../../assets/icons";
const SignUpEndWelcome = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-12 h-full gap-2">
      <div className="col-span-7 flex items-center justify-center bg-[#82AA47] h-full">
        <IconWelcome></IconWelcome>
      </div>
      <div className="col-span-5 flex justify-center  items-center flex-col">
        <div>
          <span className="font-bold text-[32px]">Welcome to Zabbo</span>
        </div>
        <div className="mt-4 flex flex-col">
          <span className="text-sm text-[#312F2F]">
            We’re going to guide you through the app.
          </span>
          <span className="text-sm text-[#312F2F]">
            or you can skip this step.
          </span>
        </div>
        <div className="flex justify-between mt-14 ">
          <div className=" flex justify-center items-center  rounded-lg border border-black mr-3 pt-2 pb-2 w-[108px] cursor-pointer">
            <span>Skip</span>
          </div>
          <div
            className=" flex justify-center items-center bg-black rounded-lg border border-black pt-2 pb-2 w-[223px] text-white cursor-pointer"
            onClick={(e) => {
              navigate("/wallet");
            }}
          >
            <span>Start</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpEndWelcome;
