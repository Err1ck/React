/* Create an InteractiveWelcome component that renders an input tag and the Welcome component. 
Pass the current content of the input tag to the name prop of the Welcome component. 
The input tag should be a controlled component. */
import { useState } from "react";
import { Welcome } from "./Exercise41-Welcome";

export function InteractiveWelcome() {
  const [username, setUsername] = useState("");
  function handleUserInputChange(event) {
    setUsername(event.target.value)
  }
  return (
    <div>
      <input
        name="username"
        value={username}
        onChange={handleUserInputChange}
      ></input>
      <Welcome name={username}/>
    </div>
  );
}
