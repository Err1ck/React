/* Modify the Login component so that the "login" button background color is "red" when the inputted password's length is shorter than 8 characters, green otherwise. */

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
  function handleReset() {
    setUsername("");
    setPassword("");
  }
  const Style = {
    backgroundColor: password.length <= 8 ? "red" : "green",
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={username} onChange={handleInputUsername} />
      <input name="password" value={password} onChange={handleInputPasword} />

      <input name="checkbox" type="checkbox" onChange={onLogin} />
      <button type="submit" disabled={buttonDisabled}>
        Loggin
      </button>
      <button type="button" onClick={handleReset} style={Style}>
        Reset
      </button>
    </form>
  );
}
