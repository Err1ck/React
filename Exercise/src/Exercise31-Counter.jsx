/* Modify the Counter component so that the initial value of the counter 
and the increment amount are passed as props to the component;*/
import { useState } from "react";

export function Counter({ a, b }) {
  const [count, setCount] = useState(a);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount((a) => a + b)}>Click</button>
    </div>
  );
}
