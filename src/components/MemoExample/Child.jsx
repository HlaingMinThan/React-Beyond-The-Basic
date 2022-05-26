import React, { memo } from "react";

function Child({ count }) {
  console.log("child component rendering");
  return <div>child component : {count}</div>;
}

export default memo(Child);
