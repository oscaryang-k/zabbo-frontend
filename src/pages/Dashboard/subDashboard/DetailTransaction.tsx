import { NavLink } from "react-router-dom";
import {
  IconArrowLeft,
  IconVerticalSeeMore,
  IconDownload,
  IconInfo,
} from "../../../assets/icons";
import { HeaderButton } from "../../../components/buttons";

const DetailTransaction = () => {
  return (
    <div className="page-content-wrapper">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <NavLink
                className="flex items-center gap-4 mr-5 "
                to="/dashboard/transactions"
              >
                <IconArrowLeft></IconArrowLeft>
              </NavLink>
            </div>
            <div className="flex items-center">
              <NavLink
                className="flex items-center gap-4 mr-4"
                to="/dashboard/report"
              >
                <HeaderButton>
                  <IconInfo></IconInfo>
                </HeaderButton>
              </NavLink>
              <NavLink className="flex items-center gap-4 " to="">
                <HeaderButton>
                  <IconVerticalSeeMore></IconVerticalSeeMore>
                </HeaderButton>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <div
            className="mt-10 rounded-3xl"
            style={{ backgroundColor: "#82AA47" }}
          >
            <div className=" items-center flex justify-center flex-col pt-8 pb-8 pr-8 pl-8">
              <span
                className="font-base text-base  font-sans"
                style={{ color: "#FFFFFF" }}
              >
                Transaction Name
              </span>

              <div className="items-center flex justify-center  ">
                <span
                  className=" font-bold font-sans rounded"
                  style={{ color: "#FFFFFF", fontSize: 32 }}
                >
                  1,200 USD
                </span>
              </div>
              <div className="items-center flex justify-center ">
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontFamily: "Helvetica",
                  }}
                  className="text-xs mt-1"
                >
                  @Troy Casey
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 flex flex-col">
          <div className="flex mt-10">
            <span className="font-bold">Transaction Details</span>
          </div>
          <div className="flex justify-between mt-6">
            <span className="text-sm" style={{ color: "#606060" }}>
              Date
            </span>
            <span className="text-sm" style={{ color: "#000000" }}>
              Oct 26, 2022, 12:42 AM
            </span>
          </div>
          <div className="flex justify-between mt-5">
            <span className="text-sm" style={{ color: "#606060" }}>
              Note
            </span>
            <span className="text-sm" style={{ color: "#000000" }}>
              Some text
            </span>
          </div>
        </div>
        <div
          className="col-span-8 mt-8 rounded-xl flex p-3"
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <div
            className="rounded items-center flex justify-center w-10 h-10"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
          >
            <IconDownload></IconDownload>
          </div>
          <div className="flex flex-col ml-3">
            <div className="flex items-center">
              <span className="text-sm ">Download Contract</span>
            </div>
            <div className="flex items-center">
              <span
                className="text-sm "
                style={{ fontSize: 10, color: "#606060" }}
              >
                PDF,PNG orJPEG
              </span>
            </div>
          </div>
        </div>
        <div className=" col-span-8">
          <div className=" flex items-center justify-center mt-20">
            <span className="font-sm" style={{ color: "#606060" }}>
              Transaction ID 312321879
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailTransaction;
