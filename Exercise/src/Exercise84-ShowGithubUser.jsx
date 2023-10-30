/* Add a new Route to the users/:username path that renders a ShowGithubUser component that receives the username as a path parameter and renders the GithubUser component from the third exercise of Context by passing it the received username. */
import { GithubUser } from "./Exercise84-GitHubUser";

export function ShowGithubUser() {
  return (
    <div>
      <GithubUser username={"Err1ck"} />
    </div>
  );
}
