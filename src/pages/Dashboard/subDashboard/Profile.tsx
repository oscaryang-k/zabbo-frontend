import { NavLink } from "react-router-dom";
import {
  IconArrowLeft,
  IconLinkedin,
  IconTwitter,
  IconUserAvatar,
  IconMetaMask,
} from "../../../assets/icons";
import { HeaderButton } from "../../../components/buttons";

const Profile = () => {
  return (
    <div className="page-content-wrapper">
      <div className=" grid grid-cols-12 gap-2">
        <div className="col-span-8 flex flex-col ml-3 mr-3">
          <div className="flex  pt-12  justify-between ">
            <div className="flex items-center">
              <NavLink className="flex items-center gap-4 mr-5" to="/dashboard">
                <IconArrowLeft></IconArrowLeft>
              </NavLink>
              <div className="">
                <h2 className="font-bold text-2xl">Profile</h2>
              </div>
            </div>
            <NavLink
              className="hover:cursor-pointer items-center "
              style={{ position: "relative" }}
              to={"/dashboard/profile/edit"}
            >
              <h2 className="font-base text-base" style={{ color: "#312F2F" }}>
                Edit
              </h2>
            </NavLink>
          </div>

          <div className="flex flex-col items-center pt-12">
            <IconUserAvatar />
            <span
              className="font-bold text-lg font-sans mb-5 mt-3"
              style={{ color: "#606060" }}
            >
              johndoe123
            </span>
            <span
              className="text-base font-normal mb-5"
              style={{ color: "rgba(0, 6, 32, 0.8)" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius ante elit, a varius metus pulvinar vitae. Suspendisse
              eleifend eleifend.
            </span>
          </div>
          <div className=" flex justify-center items-center">
            <NavLink to="" className="mr-5 ">
              <IconTwitter></IconTwitter>
            </NavLink>

            <NavLink to="" className="">
              <IconLinkedin></IconLinkedin>
            </NavLink>
          </div>
          <div className="col-span-8 ">
            <div className="mt-8 mb-8">
              <hr style={{ borderTopWidth: 2 }} />
            </div>
          </div>
        </div>
        <div className="col-span-8 flex flex-col ml-3 mr-3">
          <div className="flex justify-between mb-5">
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#606060" }}
            >
              Name
            </span>
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#000" }}
            >
              John Doe
            </span>
          </div>
          <div className="flex justify-between mb-5">
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#606060" }}
            >
              Business Name
            </span>
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#000" }}
            >
              John Doe Development
            </span>
          </div>
          <div className="flex justify-between mb-5">
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#606060" }}
            >
              Email
            </span>
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#000" }}
            >
              johndoegmail.com
            </span>
          </div>
          <div className="flex justify-between mb-5">
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#606060" }}
            >
              Phone Number
            </span>
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#000" }}
            >
              +1 (22) 345 6789
            </span>
          </div>
          <div className="flex justify-between mb-5">
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#606060" }}
            >
              Address
            </span>
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#000" }}
            >
              10-123 1/2 Main St NW Montreal QC H32 2YZ
            </span>
          </div>
          <div className="flex justify-between mb-5">
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#606060" }}
            >
              Website
            </span>
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#000" }}
            >
              http://www.johndoe.com
            </span>
          </div>
        </div>
        <div className="col-span-8 flex flex-col">
          <NavLink className="flex bg-gray-100 flex p-3 rounded-xl" to={""}>
            <HeaderButton>
              <IconMetaMask />
            </HeaderButton>
            <div className="flex items-center ml-3">
              <span className="text-sm">Meta Mask</span>
            </div>
          </NavLink>
          <div className="flex items-center justify-center mt-8 cursor-pointer">
            <div className="flex items-center rounded-lg border pt-3 pb-3 pr-16 pl-16 border-black cursor-pointer  hover:bg-black hover:text-gray-100">
              Log Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
