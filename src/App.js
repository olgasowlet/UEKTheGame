import React from 'react';
import LandingPage from "./LandingPage";
import UserPanel from "./UserPanel";



function App() {
  const loggedIn = false;

  return (
    loggedIn ? <UserPanel /> : <LandingPage />
  );
}

export default App;
