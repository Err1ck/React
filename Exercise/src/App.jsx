/* Add a Route to the users path that shows the GihubUserList component from the first exercise of Data Fetching with fetch and useEffect. Modify it so that instead of showing the GithubUser component for each username entered, it shows a link to a nested route that shows the ShowGithubUser component. In doing so, remove the /users/:username route from the App component, and add a new nested route within the /users route. */
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Welcome } from "./Exercise87-Welcome";
import { Counter } from "./Exercise87-Counter";
import { ShowGithubUser } from "./Exercise87-ShowGithubUser";
import GithubUsers from "./Exercise87-GitHubUsers";

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
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
