/* Create a Colors component that renders a ul tag with a li tag for each color passed in the items prop. The items prop should be an array of strings. */

import { Colors } from "./Exercise53-Colors";

export function App() {
  return <Colors colors={["Red", "Blue", "Green", "Grey"]} />;
}
