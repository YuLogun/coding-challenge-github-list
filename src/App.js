import React, { Suspense, useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/LoadingIcon.css";
import { MyContext, themes } from "./context/MyContext";

const Home = React.lazy(() => import("./components/Home"));
const UserName = React.lazy(() => import("./components/UserName"));
const ReadMeMarkup = React.lazy(() => import("./components/ReadMeMarkup"));

function App() {
  const [theme, setTheme] = useState(themes.light);
  const handleThemeClick = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };
  return (
    <div>
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="lds-ripple">
              <div />
              <div />
            </div>
          </div>
        }
      >
        <MyContext.Provider value={theme}>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Home handleThemeClick={handleThemeClick} />}
            />
            <Route exact path="/:userName" component={UserName} />
            <Route
              exact
              path="/:userName/:repositoryName"
              component={ReadMeMarkup}
            />
          </Switch>
        </MyContext.Provider>
      </Suspense>
    </div>
  );
}

export default App;
