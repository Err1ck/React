/* When calling "setter" function to increment the counter, 
should the parameter be a function or an immediate value? Why? */
import { useState } from "react";

export function App() {
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

/* Con la funcion hacemos que podamos tener un valor inmediato con los botones */