import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import User from '../../Helpers/User';
import Div from './style';
import SubmitButton from '../../components/SubmitButton';
import Confirmation from '../../components/Confirmation/Confirmation';

const Wrapper = styled.div`
  background: var(--gris-light);
  width: 100%;
  height: 100vh;
  padding: 2% 5%;
  justify-content: center;
  align-items: center;
`;

const Login = props => {
  const { user, setUser } = props;
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(null);
  const [error, setError] = useState(false);

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
  }, [user]);

  const formHandler = e => {
    e.preventDefault();
    setLoading(true);
    validateLogin({
      username: e.target[0].value,
      password: e.target[1].value,
    });
  };

  const validateLogin = async ({ username, password }) => {
    try {
      const userData = await User.validateUser(username, password);
      setLoading(false);
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
    if (user.tipo === 'admin') return '/admin';
    if (user.tipo === 'medico') return '/medicos';
    if (user.tipo === 'recepcion') return '/recepcion';
    if (user.tipo === 'cliente') return '/clientes';
  };

  return !isLogin ? (
    <Wrapper className="wrap">
      <Container>
        <Row>
          <Col>
            <Div className="wrap">
              <img
                src={'http://api.ivum.org/img/ivum_logo.png'}
                alt="Instituto Venezolano de Ultrasonido en Medicina"
              />
              <form action="/usuarios/login" className="wrap" method="POST" onSubmit={formHandler}>
                {error ? <h3>Usuario o contraseña inválidos</h3> : ''}
                <label htmlFor="username">Usuario</label>
                <input type="text" name="username" />
                <label htmlFor="password">Clave</label>
                <input type="password" name="password" />
                {loading ? (
                  <Confirmation message="Cargando" loading={true} />
                ) : (
                  <SubmitButton type="submit" name="Ingresar" prevent={false} width="50%" />
                )}
              </form>
            </Div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  ) : (
    <Redirect to={redirect} />
  );
};

export default Login;
