interface propsType {
  title: string;
  content: string;
}
const ContractInfoList = (props: propsType) => {
  return (
    <div className="flex justify-between mb-2 mt-2 ">
      <span
        className="text-sm font-normal font-sans"
        style={{ color: "#606060" }}
      >
        {props.title}
      </span>
      <span className="text-sm font-normal font-sans" style={{ color: "#000" }}>
        {props.content}
      </span>
    </div>
  );
};
ContractInfoList.defaultProps = {
  title: "",
  content: "",
};
export default ContractInfoList;
