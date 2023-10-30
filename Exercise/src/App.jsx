/* Add a new Route to the /counter path that renders the Counter component from the first exercise of Component Composition. */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Counter } from "./Exercise83-Counter";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}
