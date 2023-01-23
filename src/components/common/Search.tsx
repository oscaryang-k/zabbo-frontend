import { IconSearch } from "../../assets/icons";

interface propsType {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: any) => void;
}
const Search = (props: propsType) => {
  return (
    <div className="flex border border-[#D1D1D1] rounded-lg pl-3 pt-2 pb-2 w-full">
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className=" focus:outline-none focus-visible:outline-none w-full bg-[#FBFBFB]"
      />
      <span className="pt-2 pr-3 pb-2 pl-2">
        <IconSearch />
      </span>
    </div>
  );
};

Search.defaultProps = {
  name: "search",
  Placeholder: "",
  value: "",
};
export default Search;
