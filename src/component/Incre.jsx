import useCounter from "../custom_hook/useCounter";

function Incre() {
  const { count, increment } = useCounter(4);
  return (
    <div style={{ textAlign: "center" }}>
      <h2> {count} </h2>
      <button onClick={increment}>click me</button>
    </div>
  );
}

export default Incre;
