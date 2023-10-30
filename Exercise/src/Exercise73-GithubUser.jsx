/* Create a GithubUser component that receives a username prop and fetches the data of the corresponding Github user from the Github API. The component should render the user's name, login and avatar. */
import { useEffect, useState } from "react";

export default function GitHubUser({ username }) {
  const [data, setData] = useState(null);
  async function fetchGitHubUser(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.log("Error", error);
    }
  }
  useEffect(() => {
    fetchGitHubUser(username);
  }, [username]);
  return (
    <div>
      {data && (
        <div>
          <h1>{data.name}</h1>
          <h2>{data.login}</h2>
          <img src={data.avatar_url} alt="Avatar" />
        </div>
      )}
    </div>
  );
}
