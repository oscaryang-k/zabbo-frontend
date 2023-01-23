import { IconChecked, IconUnChecked } from "../../assets/icons";

interface propsType {
  name: string;
  checked: boolean;
  onChange: (e: any) => void;
  title: string;
}

const CheckBox = (props: propsType) => {
  console.log(props);
  return (
    <div className="cursor-pointer flex select-none" onClick={props.onChange}>
      <div className="flex mr-2">
        {props.checked === true ? (
          <IconChecked></IconChecked>
        ) : (
          <IconUnChecked></IconUnChecked>
        )}
      </div>
      <span>{props.title}</span>
    </div>
  );
};
export default CheckBox;

CheckBox.defaultProps = {
  name: "",
  checked: false,
  title: "",
};
