import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import UserName from "./components/UserName";
import ReadMeMarkup from "./components/ReadMeMarkup";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:userName" component={UserName} />
        <Route
          exact
          path="/:userName/:repositoryName"
          component={ReadMeMarkup}
        />
      </Switch>
    </div>
  );
}

export default App;
