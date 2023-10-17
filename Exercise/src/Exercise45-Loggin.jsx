/* Use the form element to handle the form's submission, 
and attach the onLogin event handler to the onSubmit event of the form element. 
How do you prevent the default behavior of the form element? */

import { useState } from "react";

export function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleInputUsername(event) {
    setUsername(event.target.value);
  }
  function handleInputPasword(event) {
    setPassword(event.target.value);
  }
  const buttonDisabled = !(username && password);

  function handleSubmit(event) {
    event.preventDefault();
    if (username && password) {
      onLogin({ username, password });
    }
  }
  function handleReset(){
    setUsername("");
    setPassword("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={username} onChange={handleInputUsername} />
      <input name="password" value={password} onChange={handleInputPasword} />

      <input name="checkbox" type="checkbox" onChange={onLogin} />
      <button type="submit" disabled={buttonDisabled}>
        Loggin
      </button>
      <button type="button" onClick={handleReset} >Reset</button>
    </form>
  );
}