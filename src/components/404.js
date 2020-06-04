import React from "react";
import notFound from "../assets/no-match.svg";
import { Link } from "react-router-dom";
import "../styles/404.css";

const NoMatch = () => {
  return (
    <div className="container-404">
      <div className="text-container-404">
        <h1>Sorry!</h1>
        <h3>Page not found</h3>
      </div>
      <img className="img-404" src={notFound} alt="404" />
      <Link className="go-home-404" to="/">
        GO HOME
      </Link>
    </div>
  );
};

export default NoMatch;
