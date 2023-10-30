/* Modify the useCounter custom hook from the first exercise of Data Fetching with fetch and useEffect to use the useCallback to memoize the functions used to increment, decrement and reset the counter. */
import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const handleCounterIncrement = () => setCounter(counter + 1);
  const handleCounterDecrement = () => setCounter(counter - 1);
  const handleCounterReset = () => setCounter(initialValue);
  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
}
