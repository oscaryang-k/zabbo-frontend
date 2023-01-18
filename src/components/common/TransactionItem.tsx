import React from "react";

import { IconArrowLeft, IconArrowRight } from "../../assets/icons";
import { HeaderButton } from "../buttons";

interface propsType {
  transactionCost: string;
  transactionName: string;
  transactionDate: string;
  transactionState: Boolean | null;
}
const TransactionItem = (props: propsType) => {
  return (
    <div className="flex justify-between mb-7">
      <div className="flex">
        <div className="mr-4">
          <HeaderButton>
            {props.transactionState === true ? (
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
      <div className="flex items-center">
        <span className="text-base font-sans font-bold">
          {props.transactionState === true ? "" : "-"}${props.transactionCost}
        </span>
      </div>
    </div>
  );
};

TransactionItem.defaultProps = {
  transactionCost: "",
  transactionName: "",
  transactionDate: "",
  transactionState: null,
};
export default TransactionItem;
