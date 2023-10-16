/* Build a Clock component that renders the current time within an h2 tag.
 Use the useEffect hook to update the time every second. */

import { useEffect, useState } from "react";
import { Button } from "./Exercise35-Button";
import { CounterDisplay } from "./Exercise35-CounterDisplay";

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
