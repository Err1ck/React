/* Extract the h2 tag showing the counter state variable into a new component called CounterDisplay 
and render it within the Counter component, passing it the count state variable as a prop */

import { useState } from "react";
import { CounterDisplay } from "./Exercise32-CounterDisplay";

export function Counter({ a, b }) {
  const [count,setCount] = useState(a);
  
  return (
    <div>
      <CounterDisplay label={count} />
      <button onClick={() => setCount((a) => a + b)}>Click</button>
    </div>
  );
}
