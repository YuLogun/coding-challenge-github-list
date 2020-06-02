import React from "react";

export const themes = {
  light: {
    foreground: "#24292e",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#24292e",
  },
};

export const MyContext = React.createContext(themes);
