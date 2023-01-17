import React from "react";

export interface propsType {
  title: string;
  badge: boolean;
  //   action: () => Function;
}

function IconButton(props: propsType) {
  const { title, badge } = props;
  return (
    <div>
      <div></div>
    </div>
  );
}

export default IconButton;
