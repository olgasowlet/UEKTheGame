import React from 'react';
// import { signIn } from './features/authorization/Auth/SignIn/action';
import LandingPage from "./LandingPage";
import UserPanel from "./UserPanel";


function App() {
  const loggedIn = true;
  console.log(loggedIn);
  // info o tym, czy jest zalogowany użytkownik przechowywać w storze
  return (
      loggedIn ? <UserPanel /> : <LandingPage />
  );
}

export default App;
