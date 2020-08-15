import React from 'react';
import Router from './Router/Router';
import { AppContext } from './common/AppContext';

const App = () => {
  const context = {};
  return (
    <AppContext.Provider value={context}>
      <Router />
    </AppContext.Provider>
  );
};

export default App;
