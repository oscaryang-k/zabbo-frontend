interface propsType {
  label: string;
  endLabel: any;
  name: string;
  type: string;
  autoFocus: boolean;

  onChange: (e: any) => void;
  placeholder: string;
  value: any;
}
const BaseInput = (props: propsType) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span
            className={`text-xs ${props.label}?mb-1:null`}
            style={{ color: "#606060" }}
          >
            {props.label}
          </span>
          <span
            className={`text-xs ${props.label}?mb-1:null`}
            style={{ color: "#606060" }}
          >
            {props.endLabel}
          </span>
        </div>
        <input
          type={props.type}
          value={props.value}
          name={props.name}
          autoFocus={props.autoFocus}
          onChange={props.onChange}
          className="border rounded-lg text-base p-3 w-full"
          style={{ backgroundColor: "#FBFBFB" }}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};
BaseInput.defaultProps = {
  label: "",
  name: "",
  type: "text",
  placeholder: "",
  value: null,
  endLabel: "",
  autoFocus: false,
};

export default BaseInput;
