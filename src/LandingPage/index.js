import React from 'react';
import { HashRouter, Switch, Route} from "react-router-dom";
import SignUp from '../features/authorization/Auth/SignUp';
import Navigation from "./Navigation";
import Content from "./content/index";
import { toLandingPage, toSignIn, toSignUp } from "./routes";
import SignIn from '../features/authorization/Auth/SignIn';


const LandingPage = () => {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toSignIn()}>
          <SignIn title="Logowanie"/>
        </Route>
        <Route path={toSignUp()}>
          <SignUp title="Rejestracja"/>
        </Route>
        <Route path={toLandingPage()}>
          <Content />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default LandingPage;