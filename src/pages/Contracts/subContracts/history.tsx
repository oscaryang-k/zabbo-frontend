import { NavLink } from "react-router-dom";
import {
  IconArrowLeft,
  IconCalendar,
  IconOption,
  IconSearch,
  IconSort,
} from "../../../assets/icons";
import { HeaderButton } from "../../../components/buttons";
import TransactionItem from "../../../components/common/TransactionItem";

const PageContactHistory = () => {
  return (
    <div className="page-content-wrapper">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <NavLink className="flex items-center gap-4 mr-5" to="/contracts">
                <IconArrowLeft></IconArrowLeft>
              </NavLink>
              <div className="">
                <h2 className="font-bold text-2xl">Open Contracts</h2>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 hover:cursor-pointer">
                <HeaderButton>
                  <IconCalendar></IconCalendar>
                </HeaderButton>
              </div>
              <div className="mr-4 hover:cursor-pointer">
                <HeaderButton>
                  <IconSearch></IconSearch>
                </HeaderButton>
              </div>
              <div className="mr-4 hover:cursor-pointer">
                <HeaderButton>
                  <IconOption></IconOption>
                </HeaderButton>
              </div>
              <div className="mr-4 hover:cursor-pointer">
                <HeaderButton>
                  <IconSort></IconSort>
                </HeaderButton>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-10">
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <span className="text-sm" style={{ color: "#606060" }}>
                Nov 30, 2022
              </span>
            </div>
            <TransactionItem
              isComplete={true}
              isCompleteState={true}
              transactionName="TransactionName"
              sendOrRecive={false}
              transactionCost="2350"
              transactionDate="02-12-22"
            ></TransactionItem>
            <TransactionItem
              isComplete={false}
              isCompleteState={true}
              transactionName="TransactionName"
              sendOrRecive={true}
              transactionCost="2350"
              transactionDate="02-12-22"
            ></TransactionItem>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageContactHistory;
