/* Modify the TodoList component so that the input clears every time a Todo is added to the items array */
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

  return (
    <div>
      <ul>
        {item.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={handleAddItem}>Add item</button>
    </div>
  );
}
