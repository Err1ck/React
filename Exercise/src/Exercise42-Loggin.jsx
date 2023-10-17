/* Create a Login component containing three inputs: 
a username input, a password input and a remember checkbox. 
All three inputs should be controlled components. */

import { useState } from "react";

export function Loggin() {
  const [data, setData] = useState({
    username: "",
    password: "",
    checkbox: false,
  });

  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox"? checked :value,
      };
    });
  }

  return (
    <div>
      <input name="username" value={data.username} onChange={handleInput} />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleInput}
      />
      <input
        name="checkbox"
        type="checkbox"
        checked={data.checkbox}
        onChange={handleInput}
      />
    </div>
  );
}
