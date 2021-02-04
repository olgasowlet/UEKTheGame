import React from 'react';
// import { signIn } from './features/authorization/Auth/SignIn/action';
import LandingPage from "./LandingPage";
import UserPanel from "./UserPanel";
import {selectToken} from "./features/authorization/authSlice"
import { useSelector } from 'react-redux';


function App() {
  const token = useSelector(state => selectToken(state))
  return (
      token ? <UserPanel /> : <LandingPage />
  );
}

export default App;
