import useCounter from "../custom_hook/useCounter";

function Dec() {
  const { count, decrement } = useCounter(2);
  return (
    <div style={{ textAlign: "center" }}>
      <h2> {count} </h2>
      <button onClick={decrement}>click me</button>
    </div>
  );
}

export default Dec;
