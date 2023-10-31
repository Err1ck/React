/* Add an index route to the GithubUserList route that shows the "Add a user and select it" message. */
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Welcome } from "./Exercise88-Welcome";
import { Counter } from "./Exercise88-Counter";
import { ShowGithubUser } from "./Exercise88-ShowGithubUser";
import GithubUsers from "./Exercise88-GithubUsers";

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
            <Link to="/users">Usuario de GitHub</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name={"Erick"} age={26} />}></Route>
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/" element={<GithubUsers />}></Route>
        <Route path=":username" element={<ShowGithubUser />}></Route>
        <Route index element={<p>Add a user and select it</p>}></Route>
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
