import React from 'react';
import LandingPage from "./LandingPage";
import UserPanel from "./features/UserPanel";



function App() {
  const loggedIn = true;

  return (
    loggedIn ? <UserPanel /> : <LandingPage />
  );
}

export default App;
