import React, { useContext } from "react";
import { firstname } from "./Context";

function Contextused() {
  const name = useContext(firstname);
  return (
    <>
      <h2>{name}</h2>
    </>
  );
}

export default Contextused;
