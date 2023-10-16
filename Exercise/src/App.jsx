/* Modify the Counter component so that the initial value of the counter 
and the increment amount are passed as props to the component; */
import { Counter } from "./Exercise31-Counter";

export function App() {
  return <Counter a={0} b={20} />;
}
