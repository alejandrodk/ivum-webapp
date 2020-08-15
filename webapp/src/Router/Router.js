import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../views/HomePage/Home';
import Recepcion from '../views/Recepcion/Recepcion';
import Login from '../views/LoginPage/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact render={Home} />
      <Route path="/ingresar" render={Login} />
      <Route path="/recepcion" render={Recepcion} />
    </BrowserRouter>
  );
};

export default Router;
