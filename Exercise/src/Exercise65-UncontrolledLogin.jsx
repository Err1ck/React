export function UncontrolledLogin() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      checkbox: formData.get("checkbox") === "on" ? true : false,
    };
    console.log(data);
  }
  return (
    <div className={"bg-blue-700 w-1/4 h-2/4"}>
      <form onSubmit={handleSubmit}>
        <input name="username" />
        <input name="password" type="password" />
        <input name="checkbox" type="checkbox" />
        <button>Login</button>
        <button type="reset"> Reset </button>
      </form>
    </div>
  );
}
