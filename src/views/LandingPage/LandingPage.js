import React from 'react';
import { HashRouter, Switch, Route} from "react-router-dom";
import SignUp from '../../components/organisms/SignViews/SignUp';
import Navigation from "../../components/organisms/Navigation/NavBar";
import Content from "../Content";
import { toLandingPage, toSignIn, toSignUp } from "../../routes";
import SignIn from '../../components/organisms/SignViews/SignIn';


export const LandingPage = () => {
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