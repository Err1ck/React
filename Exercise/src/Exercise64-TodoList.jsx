/* Style the TodoList component using CSS Modules, either with CSS or SCSS. */
import classes from "./Exercise64-TodoList.module.scss"
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
            {item} <button onClick={() => handleRemove(index)} className={classes.bttnremove}>Remove</button>
          </li>
        ))}
      </ul>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={handleAddItem} className={classes.bttadd}>Add item</button>
      <button onClick={handleReset} className={classes.bttnrst}>Reset</button>
    </div>
  );
}
