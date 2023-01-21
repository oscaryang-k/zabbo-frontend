import { NavLink } from "react-router-dom";
import { IconLogo } from "../../assets/icons";

const Welcome = () => {
  return (
    <div className="flex justify-center items-center h-full flex-col">
      <div className="flex">
        <IconLogo></IconLogo>
      </div>
      <div className=" w-[488px] text-center mt-10 flex-col">
        <div>
          <span className=" text-xl">
            With Zabbo you can share as much or as little as you want with us.
            How would you like to get started?
          </span>
        </div>
        <div className="flex justify-between mt-12">
          <div className=" flex justify-center items-center  rounded-lg border border-black pt-2 pb-2 w-[200px] cursor-pointer">
            <span>Create an Incognito Profile</span>
          </div>
          <div className=" flex justify-center items-center bg-black rounded-lg border border-black pt-2 pb-2 w-[200px] text-white cursor-pointer">
            <span>Create a Public Profile</span>
          </div>
        </div>
        <div className="w-[200px] flex justify-center mt-2">
          <span className="flex text-sm" style={{ color: "#82AA47" }}>
            What is incognito?
          </span>
        </div>
        <div className="flex justify-center items-center mt-40 ">
          <span>
            Already have an account?
            <NavLink style={{ color: "#82AA47" }} to={"/signin"}>
              {" "}
              Sign In
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
