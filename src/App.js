import React, { useState, useEffect } from "react";
import "./App.css";

const url = "https://api.github.com/users";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();

    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Github Users</h2>
      <ul className="git">
        {users.map((user) => {
          const {
            login,
            id,
            avatar_url,
            url,
            html_url,
            followers_url,
            following_url,
            repos_url,
            events_url,
          } = user;
          return (
            <li key={id}>
              <h2>{login}</h2>
              <img src={avatar_url} alt={login} width="100px" height="100px" />
              <a href={html_url}>Profile</a>

              <a href={repos_url}>Repositories</a>
              <a href={events_url}>Events</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
