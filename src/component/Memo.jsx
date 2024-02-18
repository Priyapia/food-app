import React, { useMemo, useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 20000000) i++;
    return count % 2 == 0;
  }, [count]);

  //   const isEven = () => {
  //     let i = 0;
  //     while (i < 200000000) i++;
  //     return count % 2 === 0;
  //   };
  return (
    <>
      <button onClick={() => setCount(count + 5)}>increment{count}</button>
      <span>{isEven ? "Even" : "odd"}</span>
      <button onClick={() => setCount1(count1 - 2)}>decrement{count1}</button>
    </>
  );
}

export default Memo;
