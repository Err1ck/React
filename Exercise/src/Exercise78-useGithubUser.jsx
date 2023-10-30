/* Modify the useGithubUser hook to return the function to fetch the data of a Github user, along with the data of the user and the error and loading states. */
import axios from "axios";
import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchGitHubUser(username) {
    setLoading(true);
    setError(null);
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => setData(response.data))
      .catch((e) => setError(e), setData(null))
      .finally(setLoading(false));
  }
  useEffect(() => {
    fetchGitHubUser(username);
  }, [username]);

  return { data, loading, error };
}
