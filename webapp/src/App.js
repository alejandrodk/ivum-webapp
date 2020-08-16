import React, { useState, useEffect } from 'react';
import Router from './Router/Router';
import { AppContext } from './common/AppContext';
import User from './Helpers/User';

const App = () => {
  const [user, setUser] = useState(User.getUserFromStorage());

  const context = {
    user,
    setUser,
  };
  return (
    <AppContext.Provider value={context}>
      <Router />
    </AppContext.Provider>
  );
};

export default App;
