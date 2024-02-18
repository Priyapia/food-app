import React from "react";
import useFetch from "../custom_hook/useFetch";

function Fetch() {
  const data = useFetch("https://api.github.com/users");
  console.log(data);
  return (
    <div style={{ textAlign: "center" }}>
      Fetch
      {data.map((ele) => (
        <li key={ele.id}>
          {ele.id} {ele.login}{" "}
        </li>
      ))}
    </div>
  );
}

export default Fetch;
