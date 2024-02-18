import React, { useReducer } from "react";

const initialState = {
  firstcount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { firstcount: state.firstcount + action.value };
    case "dec":
      return { firstcount: state.firstcount - action.value };
    default:
      return state;
  }
};
function UseRedObj() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>count is {count.firstcount}</h2>
      <button onClick={() => dispatch({ type: "inc", value: 5 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "dec", value: 5 })}>
        decrement
      </button>
    </>
  );
}

export default UseRedObj;
