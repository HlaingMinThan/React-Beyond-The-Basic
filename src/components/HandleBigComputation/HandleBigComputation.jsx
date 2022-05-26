import React, { useMemo, useState } from "react";

export default function HandleBigComputation() {
  console.log("component start rendering");
  let [count, setCount] = useState(0);
  let [arr, setArr] = useState([1, 2, 3]);
  const memoizedValue = useMemo(calcuateBigComputation, [arr]);

  function calcuateBigComputation() {
    console.log("calculation big computation task");
    for (let x = 0; x < 2000000000; x++) {} //simulate slow the performance
    return arr.reduce((a, b) => a + b, 0);
  }
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
          <button
            className="bg-red-400 px-4 py-2 rounded-md "
            onClick={() => setCount((prev) => prev - 1)}
          >
            -
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-3xl">
          Big Computation work is here : {memoizedValue}
        </h1>
        <div className="flex justify-center">
          <button
            className="bg-red-400 px-4 py-2 rounded-md text-white"
            onClick={() => setArr([1, 2, 3, 4])}
          >
            Compute new big task again
          </button>
        </div>
      </div>
    </div>
  );
}
