/* Modify the Counter component so that whenever the value of the counter changes, the value of a ref is updated to contain the direction of the change (i.e. "up" or "down") relative to the initialValue prop. Print the value of the ref to the console only when it's different from the previous value. */

import { useEffect, useRef, useState } from "react";
import { Button } from "./Exercise52-Button";
import { CounterDisplay } from "./Exercise52-CounterDisplay";

export function Counter({ a = 0, b = 1 }) {
  const [count, setCount] = useState(a);
  const directionOfChange = useRef(null);

  useEffect(() => {
    console.log("El valor actual es", count);
    if (!directionOfChange.current) {
      const direction = count > a ? "up" : "down";
      console.log(`La direccion actual es ${direction}`);
    }
  }, [count, a]);

  function incrementCounter() {
    setCount(count + 1);
  }
  function decrementCounter() {
    setCount(count - 1);
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
