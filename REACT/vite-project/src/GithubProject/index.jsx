/*
// This is ONE user returned by GitHub

const person = {
  login: "mojombo",
  id: 1,
  avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
  html_url: "https://github.com/mojombo",
  type: "User",
};
*/



import { useState, useEffect } from "react";
import axios from "axios";

function GithubProject() {
  const [people, setPeople] = useState([]);

  const getUserData = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: "https://api.github.com/users",
      });

      setPeople(response.data);
    } catch (e) {
      console.log("Error is", e);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div
      style={{
        background: "#0d1117",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Inter, Segoe UI, sans-serif",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          padding: "20px",
          borderBottom: "1px solid #30363d",
        }}
      >
        <h2>GitHub</h2>

        <input
          type="text"
          placeholder="Search GitHub"
          style={{
            flex: 1,
            padding: "10px",
            background: "#161b22",
            color: "white",
            border: "1px solid #30363d",
            borderRadius: "6px",
          }}
        />

        <button
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </nav>

      {/* Results */}
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid #30363d",
        }}
      >
        <h2>{people.length} Users Found</h2>
      </div>

      {/* User Cards */}
      {people.map((person) => (
        <div
          key={person.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            borderBottom: "1px solid #30363d",
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              src={person.avatar_url}
              alt={person.login}
              width="80"
              height="80"
              style={{
                borderRadius: "50%",
              }}
            />

            <div>
              <h2>{person.login}</h2>

              <p>ID: {person.id}</p>

              <p>Type: {person.type}</p>

              <a
                href={person.html_url}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#58a6ff",
                }}
              >
                {person.html_url}
              </a>
            </div>
          </div>

          <button
            style={{
              padding: "8px 18px",
              cursor: "pointer",
            }}
          >
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}

export default GithubProject;
