import { NavLink } from "react-router-dom";

import { HeaderButton } from "../../../components/buttons";
import {
  IconArrowLeft,
  IconDownload,
  IconVerticalSeeMore,
} from "../../../assets/icons";
import ContractInfoList from "./ContractInfolistItem";

const ContractDetail = () => {
  return (
    <div className="page-content-wrapper">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <NavLink className="flex items-center gap-4 mr-5" to="/contracts">
                <HeaderButton>
                  <IconArrowLeft></IconArrowLeft>
                </HeaderButton>
              </NavLink>
              <div className="">
                <h2 className="font-bold text-2xl">Open Contracts</h2>
              </div>
            </div>
            <NavLink
              className="flex items-center gap-4"
              to="/contracts/add-contract"
            >
              <HeaderButton>
                <IconVerticalSeeMore></IconVerticalSeeMore>
              </HeaderButton>
            </NavLink>
          </div>
        </div>
        <div className="col-span-8">
          <div
            className="mt-10 rounded-3xl"
            style={{ backgroundColor: "#82AA47" }}
          >
            <div className=" items-center flex justify-center">
              <span
                className="font-bold text-base mt-8  font-sans"
                style={{ color: "#FFFFFF" }}
              >
                Development - sprint 1
              </span>
            </div>
            <div className="items-center flex justify-center  ">
              <span
                className="mt-5 5 mb-8 5 ml-2 mr-2 bg-white text-sm font-sans p-2 rounded"
                style={{ color: "#82AA47" }}
              >
                12 days left
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <div className="flex justify-between mb-2 mt-10">
            <span
              className="text-sm font-normal font-sans"
              style={{ color: "#606060" }}
            >
              Username
            </span>
            <span
              className="text-sm font-normal font-sans"
              style={{ color: "#000" }}
            >
              ericdickson12
            </span>
          </div>
          <div className="mt-4 mb-4">
            <hr style={{ borderColor: "#E8E8E8" }} />
          </div>
          <ContractInfoList title="Amount" content="1400USDT" />
          <div className="mt-4 mb-4">
            <hr style={{ borderColor: "#E8E8E8" }} />
          </div>
          <ContractInfoList
            title="Funding Date"
            content="January 12, 2023, 11:59 pm UTC"
          />
          <ContractInfoList
            title="Delivery Date"
            content="Jan 26, 2023, 5:00 pm UTC"
          />

          <ContractInfoList
            title="Funding Release Date"
            content="Feb 1, 2023, 5:00 pm UTC"
          />

          <ContractInfoList title="Evaluation Period" content="14 days" />
        </div>
        <div
          className="col-span-8 mt-4 rounded-xl flex p-3"
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
                48KB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractDetail;
