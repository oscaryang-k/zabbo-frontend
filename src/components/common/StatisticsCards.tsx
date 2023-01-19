import { IconDoubleCheck, IconEdit, IconLoading } from "../../assets/icons";

interface StatisticsProps {
  isContracts: boolean;
  nActivity: number;
  nContracts: number;
  nPending: number;
  nCompleted: number;
}

function StatisticsCards({
  nActivity,
  nPending,
  nCompleted,
  isContracts,
  nContracts,
}: StatisticsProps) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="card-status active p-5 rounded-2xl ">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-base">
              {isContracts ? "Open Contracts" : "Activity"}
            </span>
            <span className="text-2xl font-bold">
              {isContracts ? nContracts : nActivity}
            </span>
          </div>
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-md text-gray-600	">
            <IconLoading></IconLoading>
          </div>
        </div>
      </div>
      <div className="card-status p-5 rounded-2xl ">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-base">Pending</span>
            <span className="text-2xl font-bold">{nPending}</span>
          </div>
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-md text-gray-600	">
            <IconEdit></IconEdit>
          </div>
        </div>
      </div>
      <div className="card-status p-5 rounded-2xl ">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-base">Completed</span>
            <span className="text-2xl font-bold">{nCompleted}</span>
          </div>
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-md text-gray-600	">
            <IconDoubleCheck></IconDoubleCheck>
          </div>
        </div>
      </div>
    </div>
  );
}

StatisticsCards.defaultProps = {
  nActivity: 0,
  nPending: 0,
  nCompleted: 0,
  nContracts: 0,
  isContracts: false,
};

export default StatisticsCards;
