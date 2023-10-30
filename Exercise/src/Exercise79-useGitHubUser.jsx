/* Write the useCurrentLocation custom hook, that uses the browser's navigator.geolocation API to get the current location of the user through the getCurrentPosition builtin method. The hook should return the current location as well as a function to get the current location, and the error and loading states. The details on how to use this API can be found here: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API */

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
