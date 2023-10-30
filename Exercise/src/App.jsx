/* Remove the Context Provider. What happens to the Clock component? Why? */
import { Clock } from "./Exercise72-Clock";

export function App() {
  return <Clock />;
}

/* Dejaria de funcionar, debido a que el componente LenguageContext le esta dando los valores de "lenguage" al 
componente Cloc, y al no recibir dichos valores las condiciones no se cumplen y el componente clock no se ejecuta */
