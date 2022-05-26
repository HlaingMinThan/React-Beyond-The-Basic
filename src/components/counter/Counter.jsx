import React, { useReducer } from "react";
import reducer from "./reducer";
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  return (
    <div className="app">
      <div className="mx-auto">
        <h1>Count: {state.count}</h1>
        <div>
          <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
      </div>
    </div>
  );
}
