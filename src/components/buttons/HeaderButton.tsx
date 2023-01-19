import React from "react";

interface HeaderButtonProps {
  children: React.ReactNode;
  isActive: boolean;
}

function HeaderButton(props: HeaderButtonProps) {
  return (
    <div
      className="relative w-10 h-10 flex items-center justify-center rounded-md"
      style={{
        backgroundColor: "#F5F5F5",
      }}
    >
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
