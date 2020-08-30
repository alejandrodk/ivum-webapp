import React, { useContext } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import { AppContext } from '../common/AppContext';
import User from '../Helpers/User';
import Home from '../views/HomePage/Home';
import Recepcion from './Recepcion';
import Login from '../views/LoginPage/Login';

const Router = () => {
  const { user, setUser } = useContext(AppContext);

  return (
    <BrowserRouter>
      <Route path="/" exact render={Home} />
      <Route
        path="/ingresar"
        render={props => <Login {...props} user={user} setUser={setUser} />}
      />
      <Route path="/recepcion" render={props => <Recepcion {...props} user={user} />} />
      <Route
        path="/logout"
        exact
        render={() => {
          User.closeUserSession(setUser);
          return <Redirect to="/ingresar" />;
        }}
      />
    </BrowserRouter>
  );
};

export default Router;
