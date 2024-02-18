import React, { useState } from "react";

function Form() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [userErr, setUserErr] = useState("false");
  const [passErr, setpassErr] = useState("false");

  const handleUser = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  };
  const handlePass = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setpassErr(true);
    } else {
      setpassErr(false);
    }
    setPass(item);
  };

  const handlesubmit = (e) => {
    if (user.length < 3 || pass.length < 3) {
      alert("please enter correct values");
    } else {
      alert("login successfully");
    }
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <div className="form">
          <h2
            style={{
              textTransform: "capitalize",
              textAlign: "center",
              color: "brown",
              fontSize: "40px",
              backgroundColor: "gray",
              height: "60px",
            }}
          >
            registration form
          </h2>
          <div className="inputfield">
            <span>username:</span>
            <input
              type="text"
              placeholder="enter name"
              value={user}
              onChange={handleUser}
            />
            {userErr ? "*" : ""}
          </div>
          <div className="inputfield">
            <span>password:</span>
            <input
              type="password"
              placeholder="enter password"
              value={pass}
              onChange={handlePass}
            />
            {passErr ? "*" : ""}
          </div>
          <div className="inputfield">
            <span style={{ float: "left" }}>select gender:</span>
            <br></br>
            <input type="radio" name="gender" />
            <span>male</span>
            <input type="radio" name="gender" />
            <span>female</span>
          </div>
          <button>submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;
