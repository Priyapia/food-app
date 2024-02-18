import React, { useEffect, useState } from "react";

function Timer() {
  // need of usestate
  //   let count = 0;
  const [time, setTime] = useState(0);
  useEffect(() => {
    // stuck
    //     const timer = setInterval(() => setTime(time + 1), 1000);
    //   }, []);
    console.log("adding new interval", time);
    const timer = setInterval(() => setTime(time + 1), 1000);
    return function () {
      console.log("clear old interval", time);
      clearInterval(timer);
    };
  }, [time]);

  return (
    <>
      <h1>Stop Watch</h1>
      <h2>Current Time is {time}</h2>
      {/* need of usestate */}
      {/* <h2>count is {count}</h2>
      <button onClick={() => count++}>click me</button> */}
    </>
  );
}

export default Timer;
