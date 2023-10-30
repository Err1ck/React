/* Extract the logic to fetch a Github user's data from the GithubUser component from the third exercise of Context into a custom hook called useGithubUser. */
import axios from "axios";
import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);

  function fetchGitHubUser(username) {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => setData(response.data))
      .catch((event) => console.error("Error", event));
  }
  useEffect(() => {
    fetchGitHubUser(username);
  }, [username]);

  return data;
}
