import { NavLink } from "react-router-dom";

interface propsType {
  transactionPrice: string;
  transactionName: string;
  transactionDate: string;
  sendOrReceive: boolean | null;
  avatarUrl: "";
}
const TransactionCard = (props: propsType) => {
  return (
    <NavLink
      className="flex  flex-center items-center justify-between  mb-5 hover:cursor-pointer"
      to={`/dashboard/transaction/?id=${props.transactionName}`}
    >
      <div className="flex">
        <div className="mr-4">
          <img
            className="inline-block h-12 w-12 rounded-full ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="flex flex-col ">
          <span
            className="text-base font-sans font-normal"
            style={{ color: "#000000" }}
          >
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
            {props.sendOrReceive === true ? "" : "-"}${props.transactionPrice}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

TransactionCard.defaultProps = {
  transactionPrice: "",
  transactionName: "",
  transactionDate: "",
  sendOrReceive: null,
};
export default TransactionCard;
