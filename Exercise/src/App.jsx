/* Extract the li tag into a new component called Color and render it within the Colors component. */
import { Colors } from "./Exercise55-Colors";

export function App() {
  return (
    <Colors
      colors={[
        { id: 1, name: "Red" },
        { id: 2, name: "Green" },
        { id: 3, name: "Blue" },
        { id: 4, name: "Grey" },
        { id: 5, name: "Purple" },
      ]}
    />
  );
}
