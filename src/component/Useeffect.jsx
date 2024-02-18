import React, { useState, useEffect } from "react";

function Useeffect() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    console.log("useeffect: Mounting 1st rendering");
  }, []);
  useEffect(() => {
    console.log("useeffect: Mounting", count);
  }, [count]);

  useEffect(() => {
    console.log("useeffect: Mounting count1", count1);
    // clean up
    return function () {
      console.log("unmounting..");
    };
  }, [count1]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1> count is {count}</h1>
      <h1> count1 is {count1}</h1>
      <button onClick={() => setCount(count + 1)}>update</button>
      <button onClick={() => setCount1(count1 + 1)}>update 2</button>
    </div>
  );
}

export default Useeffect;
