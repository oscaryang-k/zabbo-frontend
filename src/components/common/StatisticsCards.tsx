import React from "react";
import { NavLink } from "react-router-dom";
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
      <NavLink
        className="card-status active p-5 rounded-2xl "
        to={`${
          isContracts ? "/contracts/open-contracts" : "/contracts/activity"
        }`}
      >
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
      </NavLink>
      <NavLink className="card-status p-5 rounded-2xl " to="/contracts/pending">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-base">Pending</span>
            <span className="text-2xl font-bold">{nPending}</span>
          </div>
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-md text-gray-600	">
            <IconEdit></IconEdit>
          </div>
        </div>
      </NavLink>
      <NavLink
        className="card-status p-5 rounded-2xl "
        to="/contracts/completed"
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-base">Completed</span>
            <span className="text-2xl font-bold">{nCompleted}</span>
          </div>
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-md text-gray-600	">
            <IconDoubleCheck></IconDoubleCheck>
          </div>
        </div>
      </NavLink>
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
