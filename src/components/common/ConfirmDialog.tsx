import React from "react";
import { IconClose } from "../../assets/icons";
import "./ConfirmDialog.scss";
interface propsType {
  display: Boolean | null;
  title: string;
  content: string;
  exit: Boolean | null;
  onOk: () => void | null;
  onCancel: () => void | null;
}

const ConfirmDialog = (props: propsType) => {
  return (
    <div
      // onClick={props.onCancel}
      className="flex confirm-dialog-body"
      style={{ display: `${props.display === true ? "flex" : "none"}` }}
    >
      <div className="flex confirm-dialog-content">
        <div className="flex flex-col">
          {props.exit ? (
            <div className="flex flex-row-reverse">
              <IconClose></IconClose>
            </div>
          ) : null}
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold mb-4 ">{props.title}</span>
            <span className="text-base">{props.content}</span>
          </div>
          <div className="flex justify-evenly mt-10 ">
            <button
              style={{
                width: 164,
                height: 40,
                borderRadius: 8,
                border: "solid 2px #000000",
                marginRight: 16,
              }}
              onClick={props.onCancel}
            >
              Cancel
            </button>
            <button
              className="text-white bg-black "
              style={{ width: 164, height: 40, borderRadius: 8 }}
              onClick={(e) => {
                props.onOk();
                props.onCancel();
              }}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
ConfirmDialog.defaultProps = {
  display: false,
  title: "",
  content: "",
  onCancel: null,
  onOk: null,
  exit: false,
};
export default ConfirmDialog;
