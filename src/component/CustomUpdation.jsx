import React from "react";
import useUpdation from "../custom_hook/useUpdation";

function CustomUpdation() {
  const { count, increment, decrement } = useUpdation(1);
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "10px" }}>{count}</h2>
      <button style={{ margin: "40px", padding: "10px" }} onClick={increment}>
        increment
      </button>
      <button onClick={decrement} style={{ margin: "40px", padding: "10px" }}>
        {" "}
        decrement
      </button>
    </>
  );
}

export default CustomUpdation;
