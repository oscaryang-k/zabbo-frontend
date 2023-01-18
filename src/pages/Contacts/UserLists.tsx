import React from "react";
import UserItem from "../../components/common/UserItem";
import AlphabetList from "react-alphabet-list";
const UserLists = () => {
  const data = ["anything", "bbb", "cc", "dd", "ee", "ff", "g", "m"];

  return (
    <>
      <div
        className="col-span-10 pl-8 pt-6 pb-6 pr-6"
        style={{ backgroundColor: "#F5F5F5", borderRadius: 20 }}
      >
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-11">
            <UserItem></UserItem>
            <UserItem></UserItem>
            <UserItem></UserItem>
          </div>
          <div className="flex flex-end">
            <AlphabetList
              data={data}
              style={{}}
              generateFn={(props: { item: string }) => {
                return <div key={`${props.item}`}>{props.item}</div>;
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default UserLists;
