import React from 'react';
import { HashRouter, Switch, Route} from "react-router-dom";
import Auth from './features/authorization/Auth';
import Navigation from "./Navigation";
import LandingPage from "./LandingPage";
import { toLandingPage, toSignIn, toSignUp } from "./routes";


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toSignIn()}>
          <Auth title="Logowanie"/>
        </Route>
        <Route path={toSignUp()}>
          <Auth title="Rejestracja"/>
        </Route>
        <Route path={toLandingPage()}>
          <LandingPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
