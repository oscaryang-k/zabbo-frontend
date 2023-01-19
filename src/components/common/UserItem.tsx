import React from "react";
import { NavLink } from "react-router-dom";

export interface propsType {
  userNickname: string;
  avatarUrl: string;
  price: string;
  date: string | number;
  content: string;
  //   action: () => Function;
}

const UserItem = (props: propsType) => {
  return (
    <NavLink to={`/contacts/about/${props.userNickname}`}>
      <div className=" p-3 mb-1  flex flex-center items-center justify-between hover:bg-gray-200 cursor-pointer">
        <div className="flex items-center">
          <div className="mr-4">
            <img
              className="inline-block h-12 w-12 rounded-full ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>

          <div className="items-start flex flex-col">
            <span className="text-base font-bold mb-1">
              {props.userNickname}
            </span>
            <span className="text-sm ">
              {!props.date ? props.content : props.date}
            </span>
          </div>
        </div>

        <div className="flex flex-col ">
          <span>${props.price}</span>
        </div>
      </div>
    </NavLink>
  );
};

UserItem.defaultProps = {
  userNickname: "ericdicson12",
  avatarUrl: "",
  content: "Eric Dicson",
  price: "100",
  date: "",
};
export default UserItem;
