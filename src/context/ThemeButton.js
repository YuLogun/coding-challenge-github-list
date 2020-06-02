import React, { useContext } from "react";
import "../styles/ThemedButton.css";
import { MyContext, themes } from "./MyContext";

const ThemeButton = (props) => {
  const context = useContext(MyContext);
  return (
    <div className="button-container">
      <button className="themed-button" onClick={props.handleClick}>
        <i
          className={context === themes.light ? `fa fa-moon-o` : `fa fa-sun-o`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default ThemeButton;
