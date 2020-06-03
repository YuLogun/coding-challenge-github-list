import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";

import "../styles/Home.css";
import ThemeButton from "../context/ThemeButton";
import { MyContext } from "../context/MyContext";

const Home = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    props.history.push(`/${value}`);
  };

  const context = useContext(MyContext);

  return (
    <div
      className="container"
      style={{ background: context.background, color: context.foreground }}
    >
      <ThemeButton handleClick={props.handleThemeClick} />

      <div className="home-container">
        <input
          id="input-field"
          type="text"
          value={value}
          placeholder="Look up your favourite dev.."
          onChange={handleChange}
        />
        <button id="search-button" onClick={handleClick}>
          GET REPOS
        </button>
      </div>
    </div>
  );
};

export default withRouter(Home);
