import React, { useState } from "react";

export const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  function addActivity() {
    // setListData([...listData, activity]);
    // console.log(listData);
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }
  function removeActivity(i) {
    const updatedListData = listData.filter((ele, id) => {
      return i != id;
    });
    setListData(updatedListData);
  }
  function removeAll() {
    setListData([]);
  }
  return (
    <>
      <div className="container">
        <div className="header">
          <h2>todo list</h2>
          <input
            type="text"
            placeholder="enter your activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          <button onClick={addActivity}>Add</button>
          <p className="List-heading">here is your list:</p>
          {listData != [] &&
            listData.map((data, i) => {
              return (
                <>
                  <p key={i}>
                    <div className="listData">{data}</div>
                    <div className="btn-position">
                      <button onClick={() => removeActivity(i)}>remove</button>
                    </div>
                  </p>
                </>
              );
            })}
          {listData.length >= 1 && (
            <button onClick={removeAll}>remove all</button>
          )}
        </div>
      </div>
    </>
  );
};
