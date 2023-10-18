import { useEffect, useState } from "react";
import { Button } from "./Exercise61-Button";
import { CounterDisplay } from "./Exercise61-CounterDisplay";

export function Counter({ a = 0, b = 1 }) {
  const Style = {
    backgroundColor: "black",
    color: "white",
    border: "3px solid green",
  };

  const [count, setCount] = useState(a);

  useEffect(() => {
    console.log(`Current Value of the Counter is ${count}`);
  }, [count]);

  function incrementCounter() {
    setCount((a) => a + b);
  }
  function decrementCounter() {
    setCount((a) => a - b);
  }
  function resetCounter() {
    setCount(a);
  }
  return (
    <div style={Style}>
      <CounterDisplay label={count} />
      <Button onClick={incrementCounter} label={"Increment"} />
      <Button onClick={decrementCounter} label={"Decrement"} />
      <Button onClick={resetCounter} label={"Reset"} />
    </div>
  );
}
