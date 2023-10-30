/* Add a Not Found route that renders when a user navigates to a path that does not exist. */
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Welcome } from "./Exercise86-Welcome";
import { Counter } from "./Exercise86-Counter";
import { ShowGithubUser } from "./Exercise86-ShowGithubUser";

export function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/counter">Contador</Link>
          </li>
          <li>
            <Link to="users/:username">Usuario de GitHub</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name={"Erick"} age={26} />}></Route>
        <Route path="/counter" element={<Counter />} />
        <Route path="users/:username" element={<ShowGithubUser />}></Route>
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
