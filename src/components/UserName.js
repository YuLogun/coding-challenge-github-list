import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

import "../styles/UserName.css";

const UserName = () => {
  const { userName } = useParams();
  const [repos, changeRepos] = useState([]);
  const url = `https://api.github.com/users/${userName}/repos`;
  useEffect(() => {
    axios.get(url).then((res) => changeRepos(res.data));
  }, [url]);
  return (
    <div>
      <Header id="repository-name" userName={userName} />
      <div className="projects-container">
        {repos.map((it) => (
          <Link to={`/${userName}/${it.name}`} key={it.id}>
            {it.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserName;
