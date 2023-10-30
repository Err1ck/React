import { useGithubUser } from "./Exercise86-useGitHubUser";

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
