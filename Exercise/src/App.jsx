/* Add a new Route to the users/:username path that renders a ShowGithubUser component that receives the username as a path parameter and renders the GithubUser component from the third exercise of Context by passing it the received username. */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShowGithubUser } from "./Exercise84-ShowGithubUser";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="users/:username" element={<ShowGithubUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
