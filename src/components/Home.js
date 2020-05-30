import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import "../styles/Home.css";

const Home = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    //e.preventDefault();
    //props.handleBtnClick(value);
    props.history.push(`/${value}`);
  };

  return (
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
  );
};

export default withRouter(Home);
