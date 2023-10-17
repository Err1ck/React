/* Add a "reset" button to the Login component that clears the content of all three inputs when clicked. */

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
  function handleLogin() {
    if (username && password) {
      onLogin({ username, password });
    }
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