import { NavLink } from "react-router-dom";
import { IconArrowLeft, IconPlus } from "../../../assets/icons";
import { HeaderButton } from "../../../components/buttons";
import ContractCard from "../../../components/common/ContractCard";

function OpenContracts() {
  return (
    <div className="page-content-wrapper">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <NavLink className="flex items-center gap-4 mr-5" to="/dashboard">
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
                <IconPlus></IconPlus>
              </HeaderButton>
            </NavLink>
          </div>
        </div>
        <div className="col-span-8">
          <div className="mt-8">
            <ContractCard
              userNickname="jhondoe"
              price="1000"
              avatarUrl=""
              contractTitle="UI/UX"
              contractState={false}
            />
            <ContractCard
              userNickname="jhondoe"
              price="1000"
              avatarUrl=""
              contractTitle="UI/UX"
              contractState={false}
            />
            <ContractCard
              userNickname="jhondoe"
              price="1000"
              avatarUrl=""
              contractTitle="UI/UX"
              contractState={false}
            />
            <ContractCard
              userNickname="jhondoe"
              price="100000"
              avatarUrl=""
              contractTitle="UI/UX"
              contractState={false}
            />
            <ContractCard
              userNickname="jhondoe"
              price="100000"
              avatarUrl=""
              contractTitle="UI/UX"
              contractState={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenContracts;
