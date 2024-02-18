import React, { createContext } from "react";

function Context() {
  const firstName = createContext();
  return (
    <>
      <h2>usecontext</h2>
      <firstName.Provider value="priya"></firstName.Provider>
    </>
  );
}

export default Context;
