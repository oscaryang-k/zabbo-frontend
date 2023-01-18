import { IconPlus } from "../../assets/icons";
import { HeaderButton } from "../../components/buttons";
import StatisticsCards from "../../components/common/StatisticsCards";

function PageContracts() {
  return (
    <div className="page-content-wrapper">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-10">
          <div className="flex items-center justify-between">
            <div className="">
              <h2 className="font-bold text-2xl">Contracts</h2>
            </div>
            <div className="flex items-center gap-4">
              <HeaderButton>
                <IconPlus></IconPlus>
              </HeaderButton>
            </div>
          </div>
          <div className="mt-8">
            <StatisticsCards nActivity={5} nPending={4} nCompleted={4}></StatisticsCards>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContracts;
