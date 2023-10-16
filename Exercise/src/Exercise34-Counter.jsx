/* Add a side effect to the Counter component from 
6.1 that prints the current value of the counter inside of the console. */

import { useEffect, useState } from "react";
import { Button } from "./Exercise34-Button";
import { CounterDisplay } from "./Exercise34-CounterDisplay";

export function Counter({ a = 0, b = 1 }) {
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
    <div>
      <CounterDisplay label={count} />
      <Button onClick={incrementCounter} label={"Increment"} />
      <Button onClick={decrementCounter} label={"Decrement"} />
      <Button onClick={resetCounter} label={"Reset"} />
    </div>
  );
}
