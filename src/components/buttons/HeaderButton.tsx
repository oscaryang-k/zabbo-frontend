import React from "react";

interface HeaderButtonProps {
  children: React.ReactNode;
  isActive: boolean;
}

function HeaderButton(props: HeaderButtonProps) {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center rounded-md  bg-gray-100  hover:bg-black hover:text-gray-100">
      {props.children}
      {props.isActive && (
        <span
          className="absolute w-4 h-4"
          style={{
            top: -4,
            right: -4,
            backgroundColor: "#82AA47",
            border: "2px solid #FFFFFF",
            borderRadius: "50%",
          }}
        ></span>
      )}
    </div>
  );
}

HeaderButton.defaultProps = {
  isActive: false,
};

export default HeaderButton;
