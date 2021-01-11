import React from 'react';
import LandingPage from "./LandingPage";
import UserPanel from "./UserPanel";



function App() {
  const loggedIn = localStorage.getItem('user') ? true : false;

  return (
    loggedIn ? <UserPanel /> : <LandingPage />
  );
}

export default App;
