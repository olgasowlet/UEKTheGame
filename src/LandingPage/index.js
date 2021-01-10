import React from 'react';
import { HashRouter, Switch, Route} from "react-router-dom";
import Auth from '../features/authorization/Auth';
import Navigation from "./Navigation";
import Content from "./content/index";
import { toLandingPage, toSignIn, toSignUp } from "../routes";


const LandingPage = () => {
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
          <Content />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default LandingPage;