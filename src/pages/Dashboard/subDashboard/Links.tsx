import { NavLink } from "react-router-dom";

import { IconArrowLeft } from "../../../assets/icons";
import BaseInput from "../../../components/common/BaseInput";

const Links = () => {
  const handleChange = (e: any) => {};
  return (
    <div className="page-content-wrapper">
      <div className=" grid grid-cols-12 gap-2">
        <div className="col-span-8 flex flex-col ml-3 mr-3">
          <div className="flex  pt-12  justify-between ">
            <div className="flex items-center">
              <NavLink
                className="flex items-center gap-4 mr-5"
                to="/dashboard/profile/edit"
              >
                <IconArrowLeft></IconArrowLeft>
              </NavLink>
              <div className="">
                <h2 className="font-bold text-2xl">Links</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 flex flex-col mt-11">
          <div className="flex mb-4 justify-between">
            <div className="w-1/2 pr-4">
              <BaseInput
                label="Twitter"
                name="twitter"
                onChange={handleChange}
                placeholder="Twitter"
              />
            </div>
            <div className="w-1/2">
              <BaseInput
                label="Linkedin"
                name="linkedin"
                onChange={handleChange}
                placeholder="Linkedin"
              />
            </div>
          </div>
          <div className="flex mb-4 justify-between">
            <div className="w-1/2 pr-4">
              <BaseInput
                label="Discord"
                name="discord"
                onChange={handleChange}
                placeholder="Discord"
              />
            </div>
            <div className="w-1/2 ">
              <BaseInput
                label="Instagram"
                name="instagram"
                onChange={handleChange}
                placeholder="Instagram"
              />
            </div>
          </div>
          <div className="flex mb-4 justify-between">
            <div className="w-1/2 pr-4">
              <BaseInput
                label="TikTok"
                name="tikTok"
                onChange={handleChange}
                placeholder="TikTok"
              />
            </div>
            <div className="w-1/2 ">
              <BaseInput
                label="Telegram"
                name="telegram"
                onChange={handleChange}
                placeholder="Telegram"
              />
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <div className="flex items-center justify-center mt-40 cursor-pointer ">
            <div className="flex items-center  justify-center rounded-lg border pt-3 pb-3 pr-16 pl-16 w-[576px] border-black hover:bg-black hover:text-gray-100">
              <span className="text-base ">Done</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Links;
