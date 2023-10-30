/* Modify the useGithubUser hook to return the function to fetch the data of a Github user, along with the data of the user and the error and loading states. */
import { useGithubUser } from "./Exercise78-useGithubUser";

export function GithubUser({ username }) {
  const data = useGithubUser(username);
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
