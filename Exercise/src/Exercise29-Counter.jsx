/* Create a Counter function component and create a new state variable called counter initialized to 0. 
The Counter component should render the counter value within an h2 tag, 
and the counter value should be incremented by 1 every time the user clicks on a button. 
Tip: use the useState hook*/ 
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrementCounter() {
    setCount((count) => count + 1);
  }
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrementCounter}>+1</button>
    </div>
  );
}
