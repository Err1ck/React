/* Make it so that the event handler is received as a prop by the AlertClock component,
 instead of being implemented within the component itself. */

import { AlertClock } from "./Exercise28-AlertClock";

export function App() {
  return <AlertClock label={"Click"} />;
}
