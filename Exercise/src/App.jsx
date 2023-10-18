/* Modify the Container component so that it can display a title received within the title prop. */

import "./Exercise68-Container.css";
import { Container } from "./Exercise68-Container";

export function App() {
  return <Container title={<h1>This is a Container!</h1>} />;
}
