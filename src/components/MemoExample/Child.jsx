import React, { memo } from "react";

function Child({ count, increaseByTwo }) {
  console.log("child component rendering");

  return (
    <div>
      <button
        className="bg-red-400 px-4 py-2 rounded-md "
        onClick={increaseByTwo}
      >
        increase by two
      </button>
      <div>child component : {count}</div>
    </div>
  );
}

export default memo(Child);
