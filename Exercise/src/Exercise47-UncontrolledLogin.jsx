/* When accessing the data of the form, 
what are the ways that you can access the current value of the username and password inputs? */

export function UncontrolledLogin() {
  function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const checkbox = event.target.elements.namedItem("checkbox").checked;
    //Para acceder a valores dentro de "Uncontrolled Forms", 
    //se debe interactuar directamente con los elementos DOM.
    const data = {
      username,
      password,
      checkbox,
    };
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="username" />
      <input name="password" type="password" />
      <input name="checkbox" type="checkbox" />
      <button>Login</button>
      <button type="reset"> Reset </button>
    </form>
  );
}
