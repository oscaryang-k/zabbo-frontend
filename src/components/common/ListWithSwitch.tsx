import { Switch } from "@headlessui/react";

interface propsType {
  checkState: boolean;
  title: string;
  onChange: () => void;
}
const ListWithSwitch = (props: propsType) => {
  return (
    <div className="flex justify-between items-center mb-5 mt-5">
      <div className="flex">
        <span className="text-base" style={{ color: "#rgba(0, 6, 32, 0.7)" }}>
          {props.title}
        </span>
      </div>
      <div className="flex">
        <Switch
          style={{
            backgroundColor: `${props.checkState ? "#000000" : "#D1D1D1"}`,
          }}
          //   checked={props.checkState}
          onChange={props.onChange}
          className={`
  relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${props.checkState ? "translate-x-4" : "translate-x-0"}
    pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </div>
  );
};

ListWithSwitch.defaultProps = {
  checkState: false,
  title: "",
};
export default ListWithSwitch;
