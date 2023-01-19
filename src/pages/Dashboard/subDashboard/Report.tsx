import { NavLink } from "react-router-dom"
import { IconArrowLeft, IconCalendar } from "../../../assets/icons"
import { HeaderButton } from "../../../components/buttons"
import CustomCalendar from "../../../components/common/calendar/calendar";

const Report = () => {
  return (
    <div className="page-content-wrapper">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <NavLink className="flex items-center gap-4 mr-5" to="/dashboard">
                <IconArrowLeft></IconArrowLeft>
              </NavLink>
              <div className="">
                <h2 className="font-bold text-2xl">Report</h2>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 hover:cursor-pointer">
                <HeaderButton>
                  <IconCalendar></IconCalendar>
                </HeaderButton>
                <CustomCalendar />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Report;
