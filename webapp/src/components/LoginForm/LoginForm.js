import React, {useState, useEffect, useContext} from 'react';
import {Redirect} from 'react-router-dom';

import {AppContext} from '../../common/AppContext';
import User from '../../Helpers/User';
import Div from './style';
import logo from './ivum_logo.png';
import SubmitButton from '../SubmitButton';
import Confirmation from '../Confirmation/Confirmation';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(null);
  const [error, setError] = useState(false);
  const {user, setUser} = useContext(AppContext);

  useEffect(() => {
    if (user.tipo !== 'guest') {
      const validateToken = async () => {
        setLoading(true);
        const isTokenValid = await User.validateSessionToken(user);
        setLoading(false);
        setRedirect(getRedirectionPage());
        setIsLogin(isTokenValid);
      };
      validateToken();
    }
  }, []);

  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    validateLogin({
      username: e.target[0].value,
      password: e.target[1].value,
    });
  };

  const validateLogin = async ({username, password}) => {
    try {
      const userData = await User.validateUser(username, password);
      setLoading(false);
      console.log(userData);
      if (userData) {
        setIsLogin(true);
        setUser(userData);
        User.saveUserInStorage(userData);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getRedirectionPage = () => {
    console.log('DEBUG USER');
    console.log(user);
    if (user.tipo == 'admin') return '/admin';
    if (user.tipo == 'medico') return '/medicos';
    if (user.tipo == 'recepcion') return '/recepcion';
    if (user.tipo == 'cliente') return '/recepcion';
  };

  return !isLogin ? (
    <Div className="wrap">
      <img src={logo} alt="Instituto Venezolano de Ultrasonido en Medicina" />
      <form action="/usuarios/login"
        className="wrap" method="POST" onSubmit={formHandler}>
        {error ? <h3>Usuario o contraseña inválidos</h3> : ''}
        <label htmlFor="username">Usuario</label>
        <input type="text" name="username" />
        <label htmlFor="password">Clave</label>
        <input type="password" name="password" />
        {loading ? (
          <Confirmation message="Cargando" loading={true} />
        ) : (
          <SubmitButton type="submit" name="Ingresar"
            prevent={false} width="50%" />
        )}
      </form>
    </Div>
  ) : (
    <Redirect to={redirect} />
  );
};

export default LoginForm;
