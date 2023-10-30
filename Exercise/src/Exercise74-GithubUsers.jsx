import axios from "axios";
import { useEffect, useState } from "react";
import { GitHubUser } from "./Exercise74-GithubUser";

export function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    function fetchData() {
      axios
        .get(`https://api.github.com/users`)
        .then((response) => setUsers(response.data))
        .catch((event) => console.error("Error de llamada", event));
    }
    fetchData();
  }, []);

  const handleUserClick = (username) => {
    setSelectedUser(username);
  };

  return (
    <div>
      <h1>Lista de Usuarios de GitHub</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.login)}>
            {user.login}
          </li>
        ))}
      </ul>
      {selectedUser && <GitHubUser username={selectedUser} />}
    </div>
  );
}
