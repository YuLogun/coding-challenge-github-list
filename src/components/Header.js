import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";

const Header = ({ userName, repositoryName, showRepoName }) => {
  return (
    <header className="header">
      <div className="links-container">
        <Link id="go-back" className="link" to="/">
          <i className="fa fa-search" aria-hidden="true" />
        </Link>
        {repositoryName ? (
          <Link id="go-repository-list" className="link" to={`/${userName}`}>
            <i className="fa fa-list" aria-hidden="true" />
          </Link>
        ) : (
          ""
        )}
      </div>

      {showRepoName ? (
        <p id="repositoryName" className="repositoryName">
          {repositoryName}
        </p>
      ) : (
        <p id="repositoryName" className="userName">
          {userName}
        </p>
      )}
    </header>
  );
};

export default Header;
