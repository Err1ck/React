/* Modify the Colors component so that items is expected to be an array of objects each containing an id and a name property. Render the name property of each object within a li tag, and use the id as a key. */

import { Colors } from "./Exercise54-Colors";

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
