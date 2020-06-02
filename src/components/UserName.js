import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

import "../styles/UserName.css";
import { MyContext } from "../context/MyContext";

const UserName = () => {
  const { userName } = useParams();
  const [repos, changeRepos] = useState([]);
  const context = useContext(MyContext);

  const url = `https://api.github.com/users/${userName}/repos`;
  useEffect(() => {
    axios.get(url).then((res) => changeRepos(res.data));
  }, [url]);
  return (
    <div style={{ background: context.background, minHeight: "100vh" }}>
      <Header id="repository-name" userName={userName} />
      <div className="projects-container">
        {repos.map((it) => (
          <Link
            to={`/${userName}/${it.name}`}
            key={it.id}
            style={{ color: context.foreground }}
          >
            {it.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserName;
