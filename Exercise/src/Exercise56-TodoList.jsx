/* Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable. The items state variable should be an array of strings. The TodoList component should also contain an input tag and a button. When the button is clicked, the event handler should add the value of the input tag to the items array. */

import { useState } from "react";

export function TodoList() {
  const [item, setItem] = useState([]);
  const [value, setValue] = useState("");

  function handleAddItem() {
    if (value !== "") {
      setItem([...item, value]);
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
