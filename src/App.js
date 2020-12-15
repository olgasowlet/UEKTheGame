import React from 'react';
import { HashRouter, Switch, Route} from "react-router-dom";
import SignIn from './features/authorization/SignIn';
import SignUp from './features/authorization/SignUp';
import Navigation from "./Navigation";
import { toSignIn, toSignUp } from "./routes";


function App() {
  return (
    <HashRouter>
      <Navigation />

      <Switch>
        <Route path={toSignIn()}>
          <SignIn />
        </Route>
        <Route path={toSignUp()}>
          <SignUp />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
