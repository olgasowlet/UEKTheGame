import React from 'react';
// import { signIn } from './features/authorization/Auth/SignIn/action';
import LandingPage from "./LandingPage";
import UserPanel from "./UserPanel";
import {selectToken} from "./features/authorization/authSlice"
import { shallowEqual, useSelector } from 'react-redux';


function App() {
  const loggedIn = false;
  const token = useSelector(state => selectToken(state))
  console.log(token);
  // info o tym, czy jest zalogowany użytkownik przechowywać w storze
  return (
      token ? <UserPanel /> : <LandingPage />
  );
}

export default App;
