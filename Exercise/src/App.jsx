/* Create a Container component that renders its children within a div tag. Have the div tag use a white background and a red border, either with a custom class or by using tailwindcss. */
import "./Exercise67-Container.css";
import { Container } from "./Exercise67-Container";

export function App() {
  return (
    <Container>
      <h1>Hola</h1>
    </Container>
  );
}
