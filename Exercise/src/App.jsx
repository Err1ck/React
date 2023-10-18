/* Make the container collapsible, so that when the title is clicked the children are either hidden of shown again. Use the useState hook to keep track of the collapsed state. */
import "./Exercise69-Container.css";
import { Container } from "./Exercise69-Container";

export function App() {
  return (
    <Container title={<h1>This is a Container!</h1>}>
      <h1>This is a Title!</h1>
    </Container>
  );
}
