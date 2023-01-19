import React from "react";
import { IconPlus } from "../../assets/icons";
import UserItem from "../../components/common/UserItem";
import HeaderButton from "../../components/buttons/HeaderButton";
// import StatisticsCards from "../../components/common/StatisticsCards";
// import AlphabetList from "react-alphabet-list";
function PageContacts() {
  // const data = ["anything", "bbb", "cc", "dd", "ee", "ff", "g", "m"];

  return (
    <div className="page-content-wrapper">
      <div className=" grid grid-cols-12 gap-2">
        <div className="col-span-10 mb-11">
          <div className="flex items-center justify-between">
            <div className="">
              <h2 className="font-bold text-2xl">Contacts</h2>
            </div>
            <div className="flex items-center gap-4">
              <HeaderButton>
                <IconPlus></IconPlus>
              </HeaderButton>
            </div>
          </div>
        </div>
        <div
          className=" col-span-10 pl-8 pt-6 pb-6 pr-6"
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: 20,
            position: "relative",
          }}
        >
          <div className="">
            <UserItem
              userNickname="John Doe"
              avatarUrl=""
              price="1890"
              date={Date.now()}
              content="JhonDoe"
            ></UserItem>
            <UserItem></UserItem>
            <UserItem></UserItem>
            <UserItem
              userNickname="John Doe"
              avatarUrl=""
              price="1890"
              date={Date.now()}
              content="JhonDoe"
            ></UserItem>
            <UserItem
              userNickname="John Doe"
              avatarUrl=""
              price="1890"
              date={Date.now()}
              content="JhonDoe"
            ></UserItem>
            <UserItem
              userNickname="John Doe"
              avatarUrl=""
              price="1890"
              date={Date.now()}
              content="JhonDoe"
            ></UserItem>
          </div>
          {/* <div className=" flex flex-end ">
            <AlphabetList
              data={data}
              style={{}}
              generateFn={(props: { item: string }) => {
                return <div key={`${props.item}`}>{props.item}</div>;
              }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default PageContacts;
