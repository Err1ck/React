/* Modify the useCounter custom hook from the first exercise of Data Fetching with fetch and useEffect to use the useCallback to memoize the functions used to increment, decrement and reset the counter. */
import { useCallback, useState } from "react";
import { Button } from "./Exercise80-Button";
import { CounterDisplay } from "./Exercise80-CounterDisplay";

export function Counter({ a = 0 }) {
  const [counter, setCounter] = useState(a);

  const handleCounterIncrement = useCallback(function handleCounterIncrement() {
    setCounter((counter) => counter + 1);
  }, []);
  const handleCounterDecrement = useCallback(function handleCounterDecrement() {
    setCounter((counter) => counter - 1);
  }, []);
  const handleCounterReset = useCallback(
    function handleCounterReset() {
      setCounter(a);
    },
    [a]
  );
  return (
    <div>
      <CounterDisplay label={counter} />
      <Button onClick={handleCounterIncrement} label={"Increment"} />
      <Button onClick={handleCounterDecrement} label={"Decrement"} />
      <Button onClick={handleCounterReset} label={"Reset"} />
    </div>
  );
}
