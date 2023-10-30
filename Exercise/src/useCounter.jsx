/* Create a custom hook useCounter that keeps track of the state of a counter, and returns the current value of the counter as well as three functions to increment, decrement and reset the counter. */
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
