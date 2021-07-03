import React from 'react';
// import { signIn } from './features/authorization/Auth/SignIn/action';
import { LandingPage } from "./views/LandingPage/LandingPage";
import  { UserPanel }  from "./components/organisms/UserPanel/UserPanel";
import {selectToken} from "./hooks/authorization/authSlice"
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector(state => selectToken(state))
  return (
      token ? <UserPanel /> : <LandingPage />
  );
}

export default App;
