/* Attempt to access the values of the form by using the FormData API. 
What are the advantages? What are the disadvantages? */

//Podemos extraer los valores del formulario de una manera mas directa
//Posible incompatibilidad con navegadores antiguos
export function UncontrolledLogin() {
    function handleSubmit(event) {
      event.preventDefault();
     const formData= new FormData(event.target)
     const data={
        username: formData.get("username"),
        password: formData.get("password"),
        checkbox: formData.get("checkbox") === "on" ? true:false,
     }
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