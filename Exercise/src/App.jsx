import { Age } from "./Exercise22-Age";
import { Welcome } from "./Exercise22-Welcome";

export function App() {
  return (
    <div>
      <Welcome age={12}/>
      <Welcome />
    </div>
  );
}
