/* Write the useCurrentLocation custom hook, that uses the browser's navigator.geolocation API to get the current location of the user through the getCurrentPosition builtin method. The hook should return the current location as well as a function to get the current location, and the error and loading states. The details on how to use this API can be found here: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API */

import { useGithubUser } from "./Exercise79-useGitHubUser";

export function GithubUser({ username }) {
  const { loading, error, data } = useGithubUser(username);
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error!</h1>}
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
