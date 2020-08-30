import React, {useState} from 'react';
import Router from './Routers/AppRouter';
import {AppContext} from './common/AppContext';
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
