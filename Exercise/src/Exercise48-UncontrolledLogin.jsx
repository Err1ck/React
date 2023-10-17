/* Attempt to access the values of the form using the DOM API 
by reading the event.target of the onSubmit event handler. 
What is the standard API? 
Are there non-standard APIs that can be used to access the form data? */

export function UncontrolledLogin() {
  function handleSubmit(event) {
    event.preventDefault();
    //la Api standard es mediante DOM
    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const checkbox = event.target.elements.namedItem("checkbox").checked;
    
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
