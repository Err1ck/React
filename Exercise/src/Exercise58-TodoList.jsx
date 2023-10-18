/* Modify the TodoList by adding a "reset" button that clears the items array when clicked. */
import { useState } from "react";

export function TodoList() {
  const [item, setItem] = useState([]);
  const [value, setValue] = useState("");

  function handleAddItem() {
    if (value !== "") {
      setItem([...item, value]);
      setValue("");
    }
  }

  function handleReset() {
    setItem([]);
  }

  return (
    <div>
      <ul>
        {item.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={handleAddItem}>Add item</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
