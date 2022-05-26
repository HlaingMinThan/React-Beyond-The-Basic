import React, { useState } from "react";
import Child from "./Child";
export default function MemoExample() {
  console.log("Parent component start rendering");
  let [count, setCount] = useState(0);
  let [anotherCount, setAnotherCount] = useState(0);

  let increaseByTwo = () => {
    setCount((prev) => prev + 2);
  };

  return (
    <div className="app">
      <div>
        <h1 className="text-2xl"> Count :{count}</h1>
        <div className="justify-center space-x-4 my-3">
          <button
            className="bg-green-400 px-4 py-2 rounded-md "
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <h1 className="text-2xl"> Another Count :{anotherCount}</h1>
        <div className="justify-center space-x-4 my-3">
          {/* 
            when we increase the anotherCount,
            it'll pass again increaseByTwo(reference type) to child component 
            and rerender again
          */}
          <button
            className="bg-red-400 px-4 py-2 rounded-md "
            onClick={() => setAnotherCount((prev) => prev + 1)}
          >
            increase another count
          </button>
        </div>
      </div>
      <Child count={count} increaseByTwo={increaseByTwo} />
    </div>
  );
}
