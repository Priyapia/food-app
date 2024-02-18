import React, { useState } from "react";
import Box from "./Box";

function Game() {
  const [state, setState] = useState(Array(9).fill(null));
  //   console.log(state);
  const [turn, setTurn] = useState(true);
  // for winner logic
  const checkwinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };
  const isWinner = checkwinner();
  function handlestate(index) {
    // console.log("index is", index);
    const copystate = [...state];
    copystate[index] = turn ? "X" : "O";
    setState(copystate);
    // for changing state
    setTurn(!turn);
  }
  function playagain() {
    setState(Array(9).fill(null));
  }
  return (
    <div className="container">
      <h2 className="heading">tic tac toe</h2>
      {isWinner ? (
        <div className="winner">
          {" "}
          {isWinner} WON
          <button onClick={playagain}>play again</button>
        </div>
      ) : (
        <>
          <div className="row">
            <Box value={state[0]} onClick={() => handlestate(0)} />
            <Box value={state[1]} onClick={() => handlestate(1)} />
            <Box value={state[2]} onClick={() => handlestate(2)} />
          </div>
          <div className="row">
            <Box value={state[3]} onClick={() => handlestate(3)} />
            <Box value={state[4]} onClick={() => handlestate(4)} />
            <Box value={state[5]} onClick={() => handlestate(5)} />
          </div>
          <div className="row">
            <Box value={state[6]} onClick={() => handlestate(6)} />
            <Box value={state[7]} onClick={() => handlestate(7)} />
            <Box value={state[8]} onClick={() => handlestate(8)} />
          </div>
        </>
      )}
    </div>
  );
}

export default Game;
