import { NavLink } from "react-router-dom";
import { IconArrowRight, IconPlus } from "../../assets/icons";
import { HeaderButton } from "../../components/buttons";
import StatisticsCards from "../../components/common/StatisticsCards";
import TransactionItem from "../../components/common/TransactionItem";

function PageContracts() {
  return (
    <div className="page-content-wrapper">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-10">
          <div className="flex items-center justify-between">
            <div className="">
              <h2 className="font-bold text-2xl">Contracts</h2>
            </div>
            <NavLink
              className="flex items-center gap-4"
              to="contract/add-contract"
            >
              <HeaderButton>
                <IconPlus></IconPlus>
              </HeaderButton>
            </NavLink>
          </div>
          <div className="mt-8">
            <StatisticsCards
              nContracts={88}
              nPending={4}
              nCompleted={4}
              isContracts={true}
            ></StatisticsCards>
          </div>
          <div className="mt-8">
            <div className="col-span-10 flex flex-col ml-3 mr-3">
              <div className="flex justify-between mb-6">
                <span
                  className="text-lg font-bold font-sans"
                  style={{ color: "#606060" }}
                >
                  History
                </span>
                <NavLink to="/contracts/history" className="flex items-center">
                  <IconArrowRight></IconArrowRight>
                </NavLink>
              </div>
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
      </div>
    </div>
  );
}

export default PageContracts;
