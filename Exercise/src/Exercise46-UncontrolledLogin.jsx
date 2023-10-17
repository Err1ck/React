/* Implement an UncontrolledLogin component that implements all the operations of the Login component, 
but does so using uncontrolled components. */

export function UncontrolledLogin() {
  return (
    <form>
      <input name="username" />
      <input name="password" type="password" />
      <input name="checkbox" type="checkbox" />
      <button>Login</button>
      <button type="reset"> Reset </button>
    </form>
  );
}
