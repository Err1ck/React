/* Build a Clock component that renders the current time within an h2 tag.
 Use the useEffect hook to update the time every second. */
import { Clock } from "./Exercise35-Clock";
import { Counter } from "./Exercise35-Counter";

export function App() {
  return (
    <div>
      <Counter a={1} b={2} />
      <Clock />
    </div>
  );
}
