/* Modify the TodoList by adding a "remove" button to each li tag. When clicked, the event handler should remove corresponding item from the items array. */

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
  function handleRemove(remove) {
    const updateItem = [...item];
    updateItem.splice(remove, 1);
    setItem(updateItem);
  }

  return (
    <div>
      <ul>
        {item.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={handleAddItem}>Add item</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
