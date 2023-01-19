import React from "react";
import { NavLink } from "react-router-dom";

export interface propsType {
  userNickname: string;
  avatarUrl: string;
  price: string;
  contractState: boolean;
  contractTitle: string;
  //   action: () => Function;
}

const ContractCard = (props: propsType) => {
  return (
    <NavLink to={`/contracts/${props.userNickname}`}>
      <div
        className=" p-8 mb-4  flex flex-center items-center justify-between hover:bg-gray-200 cursor-pointer  rounded-2xl"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="flex">
          <div className="mr-4">
            <img
              className="inline-block h-12 w-12 rounded-full ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>

          <div className="items-start flex flex-col">
            <span className="text-base font-bold mb-1">
              {props.contractTitle}
            </span>
            <span className="text-sm " style={{ color: "#606060" }}>
              {props.userNickname}
            </span>
          </div>
        </div>

        <div className="items-start flex flex-col">
          <div className="flex">
            <span className="text-lg font-bold">${props.price}</span>
          </div>
          <div className="flex">
            <span className="text-sm" style={{ color: "#606060" }}>
              {props.contractState ? "" : ""}
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

ContractCard.defaultProps = {
  userNickname: "ericdicson12",
  avatarUrl: "",
  contractTitle: "",
  contractState: false,
  price: "0",
};
export default ContractCard;
