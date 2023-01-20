interface propsType {
  label: string;
  endLabel: any;
  name: string;
  type: string;
  onChange: (e: any) => void;
  placeholder: string;
  value: string;
}
const BaseInput = (props: propsType) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span className="text-xs mb-1" style={{ color: "#606060" }}>
            {props.label}
          </span>
          <span className="text-xs mb-1" style={{ color: "#606060" }}>
            {props.endLabel}
          </span>
        </div>
        <input
          type={props.type}
          name={props.name}
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
  value: "",
  endLabel: "",
};

export default BaseInput;
