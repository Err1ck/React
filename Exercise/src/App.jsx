/* Add three Links within the main App component and use them to navigate to all three routes. */
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Welcome } from "./Exercise85-Welcome";
import { Counter } from "./Exercise85-Counter";
import { ShowGithubUser } from "./Exercise85-ShowGithubUser";

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
      </Routes>
    </BrowserRouter>
  );
}
