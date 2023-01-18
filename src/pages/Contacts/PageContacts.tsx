import React from "react";
import { IconPlus } from "../../assets/icons";
import HeaderButton from "../../components/buttons/HeaderButton";
import StatisticsCards from "../../components/common/StatisticsCards";

function PageContacts() {
  return (
    <div className="page-content-wrapper">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-10">
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
      </div>
    </div>
  );
}

export default PageContacts;
