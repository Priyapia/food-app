import React, { useState } from "react";

function Todo1() {
  const [userInput, setUserInput] = useState("");
  const [getInput, setGetInput] = useState([]);
  const addData = () => {
    if (userInput !== "") setGetInput([...getInput, userInput]);
    // console.log(getInput);// got data
    setUserInput(""); // for empty input box
  };
  const removedata = (id) => {
    // console.log(id); // repeated index
    const updated = getInput.filter((ele, ind) => {
      console.log(ele);
      console.log(ind);
      return ind !== id;
    });
    setGetInput(updated);
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1> 📝todo list 📝</h1>
        </div>
        <div className="add-item">
          <input
            type="text"
            placeholder="✍️ enter your list items..."
            className="user-input"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
          {/* <span>{userInput}</span> */}
          <button className="btn" onClick={addData}>
            add items ➕
          </button>
          {getInput.map((ele, id) => {
            return (
              <>
                <div className="display-container" key={id}>
                  <div className="displayData">✅ {ele}</div>
                  <button className="btn" onClick={() => removedata(id)}>
                    delete 🗑️
                  </button>
                </div>
              </>
            );
          })}
          <button className="btn" onClick={() => setGetInput([])}>
            want to delete all items ? 🚮
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo1;
