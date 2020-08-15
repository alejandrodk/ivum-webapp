import React, {useState, useEffect} from 'react';
import Router from './Router/Router';
import {AppContext} from './common/AppContext';
import User from './Helpers/User';

const App = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUserFromStorage = () => {
      const stored = localStorage.getItem('user_IVUM');
      return stored ? stored : {
        name: null,
        username: null,
        email: null,
        type: 'guest',
        token: null,
        expire: null,
      };
    };
    setUser(getUserFromStorage());
  }, []);

  const context = {
    user,
    setUser,
    handleLogin: User.validateUser,
  };
  return (
    <AppContext.Provider value={context}>
      <Router />
    </AppContext.Provider>
  );
};

export default App;
