import React, { useEffect, useRef, useState } from "react";

export default function Ref() {
  const [name, setname] = useState("");
  const refElement = useRef("hello");
  // console.log(refElement);

  useEffect(() => {
    refElement.current.focus();
  }, []);

  function reset() {
    refElement.current.focus();
    setname("");
  }

  function changestyle() {
    refElement.current.style.color = "red";
    refElement.current.style.backgroundColor = "green";
    // refElement.current.value = "priya";
  }

  return (
    <>
      <h2>useref</h2>
      <input
        type="text"
        ref={refElement}
        value={name}
        onChange={(e) => setname(e.target.value)}
        style={{ margin: "10px", padding: "5px" }}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={changestyle}> change</button>
    </>
  );
}
