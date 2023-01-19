import { NavLink } from "react-router-dom";
import {
  IconArrowLeft,
  IconCalendar,
  IconOption,
  IconSearch,
  IconSort,
} from "../../../assets/icons";
import { HeaderButton } from "../../../components/buttons";
import TransactionCard from "../../../components/common/TransactionCard";

function MonthlyTransactions() {
  return (
    <div className="page-content-wrapper">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <NavLink className="flex items-center gap-4 mr-5" to="/dashboard">
                <IconArrowLeft></IconArrowLeft>
              </NavLink>
              <div className="">
                <h2 className="font-bold text-2xl">Transactions</h2>
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
              <div className=" hover:cursor-pointer">
                <HeaderButton>
                  <IconSort></IconSort>
                </HeaderButton>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <div className="mt-8">
            <TransactionCard
              transactionPrice="1000"
              avatarUrl=""
              transactionName="Transaction Name"
              transactionDate="10.24.2022"
              sendOrReceive={true}
            />
            <TransactionCard
              transactionPrice="1000"
              avatarUrl=""
              transactionName="Transaction Name"
              transactionDate="10.24.2022"
              sendOrReceive={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthlyTransactions;
