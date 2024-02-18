import React from "react";

function Box({ value, onClick }) {
  return (
    <>
      <div className="square" onClick={onClick}>
        <h2>{value}</h2>
      </div>
    </>
  );
}

export default Box;
