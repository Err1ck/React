/* Add a "login" button to the Login component. 
This button should be disabled as long as the username and password inputs are empty. 
When clicked, the event handler attached to the button should call an onLogin function
passed as a prop to the Login component, passing it the state. */

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

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={username} onChange={handleInputUsername} />
      <input name="password" value={password} onChange={handleInputPasword} />

      <input name="checkbox" type="checkbox" onChange={onLogin} />
      <button type="submit" disabled={buttonDisabled}>
        Loggin
      </button>
    </form>
  );
}
