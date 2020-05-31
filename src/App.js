import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/LoadingIcon.css";

const Home = React.lazy(() => import("./components/Home"));
const UserName = React.lazy(() => import("./components/UserName"));
const ReadMeMarkup = React.lazy(() => import("./components/ReadMeMarkup"));

function App() {
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:userName" component={UserName} />
          <Route
            exact
            path="/:userName/:repositoryName"
            component={ReadMeMarkup}
          />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
