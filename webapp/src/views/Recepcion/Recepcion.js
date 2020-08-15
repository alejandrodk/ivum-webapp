import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Main from './MainPage';
import NuevaConsulta from './NuevaConsulta';
import NuevoPago from './NuevoPago';
import Consultas from './Consultas';
import Pagos from './Pagos';
import Pacientes from './Pacientes';
import Paciente from './Paciente';

const Wrapper = styled.div`
  background: var(--gris-light);
  width: 100%;
  height: 100%;
  padding: 2% 5%;
  nav {
    width: 18%;
  }
  .content {
    width: 80% !important;
  }
`;

const Recepcion = ({match}) => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper className="wrap">
        <Sidebar
          title="Recepción IVUM"
          home="/recepcion"
          links={[]}
        />
        <div className="content">
          <Switch>
            <Route path={match.path} exact render={Main} />
            <Route path={`${match.path}/consultas`} exact render={Consultas} />
            <Route path={`${match.path}/consultas/nueva`}
              exact render={NuevaConsulta} />
            <Route path={`${match.path}/pagos`} exact render={Pagos} />
            <Route path={`${match.path}/pagos/nuevo`}
              exact render={NuevoPago} />
            <Route path={`${match.path}/pacientes`} exact render={Pacientes} />
            <Route path={`${match.path}/pacientes/:cedula`}
              exact render={Paciente} />
          </Switch>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

Recepcion.propTypes = {
  match: PropTypes.object,
};
export default Recepcion;
