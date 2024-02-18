import React, { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initialState;

    default:
      return state;
  }
}
function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>count {count}</h2>
      <button onClick={() => dispatch("inc")}>increment</button>

      <button onClick={() => dispatch("dec")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </>
  );
}

export default UseReducer;
