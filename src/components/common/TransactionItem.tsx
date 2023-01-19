import React from "react";

import { IconArrowLeft, IconArrowRight } from "../../assets/icons";
import { HeaderButton } from "../buttons";

interface propsType {
  transactionCost: string;
  transactionName: string;
  transactionDate: string;
  sendOrRecive: boolean | null;
  isComplete: boolean;
  isCompleteState: boolean;
}
const TransactionItem = (props: propsType) => {
  return (
    <div className="flex  flex-center items-center justify-between p-4 mb-3 hover:bg-gray-200 cursor-pointer">
      <div className="flex">
        <div className="mr-4">
          <HeaderButton>
            {props.sendOrRecive === true ? (
              <IconArrowLeft />
            ) : (
              <IconArrowRight />
            )}
          </HeaderButton>
        </div>
        <div className="flex flex-col ">
          <span className="text-base font-sans font-normal">
            {props.transactionName}
          </span>
          <span
            className="text-sm font-sans font-normal text-left"
            style={{ color: "#606060" }}
          >
            {props.transactionDate}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex ">
          <span className="text-base font-sans font-bold text-right">
            {props.sendOrRecive === true ? "" : "-"}${props.transactionCost}
          </span>
        </div>
        <div className="flex ">
          <span
            className="text-sm font-sans text-right"
            style={{ color: "#606060" }}
          >
            {props.isCompleteState === true
              ? props.isComplete === true
                ? "Finished"
                : "Waiting on product"
              : null}
          </span>
        </div>
      </div>
    </div>
  );
};

TransactionItem.defaultProps = {
  isComplete: false,
  isCompleteState: false,
  transactionCost: "",
  transactionName: "",
  transactionDate: "",
  sendOrRecive: null,
};
export default TransactionItem;
