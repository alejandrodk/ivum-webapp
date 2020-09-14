import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../views/Recepcion/MainPage';
import NuevaConsulta from '../views/Recepcion/NuevaConsulta';
import NuevoPago from '../views/Recepcion/NuevoPago';
import Consultas from '../views/Recepcion/Consultas';
import Pagos from '../views/Recepcion/Pagos';
import Pacientes from '../views/Recepcion/Pacientes';
import Paciente from '../views/Recepcion/Paciente';
import NuevoPaciente from '../views/Recepcion/NuevoPaciente';
import Medicos from '../views/Recepcion/Medicos';
import Medico from '../views/Recepcion/Medico';

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

const Recepcion = props => {
  const {match, user} = props;

  return user.tipo === 'recepcion' ? (
    <React.Fragment>
      <Header />
      <Wrapper className="wrap">
        <Sidebar
          title="Recepción IVUM"
          home="/recepcion"
          links={[
            {
              category: 'Consultas',
              icon: 'fas fa-book-medical',
              links: [
                {
                  title: 'Programar consulta',
                  url: `${match.path}/consultas/nueva`,
                },
                {title: 'consultas', url: `${match.path}/consultas`},
              ],
            },
            {
              category: 'Pagos',
              icon: 'fas fa-file-invoice-dollar',
              links: [
                {title: 'Procesar pago', url: `${match.path}/pagos/nuevo`},
                {title: 'Historial de pagos', url: `${match.path}/pagos`},
              ],
            },
            {
              category: 'Pacientes',
              icon: 'fas fa-users',
              links: [
                {title: 'Datos de pacientes', url: `${match.path}/pacientes`},
                {
                  title: 'Registrar nuevo paciente',
                  url: `${match.path}/pacientes/nuevo`,
                },
              ],
            },
            {
              category: 'Médicos',
              icon: 'fas fa-user-md',
              links: [
                {title: 'Listado de médicos', url: `${match.path}/medicos`},
              ],
            },
            {
              category: 'Exámenes',
              icon: 'fas fa-file-medical-alt',
              links: [
                {title: 'Listado de Exámenes', url: `${match.path}/examenes`},
                {title: 'Precios', url: `${match.path}/examenes/precios`},
              ],
            },
          ]}
        />
        <div className="content">
          <Switch>
            <Route path={match.path} exact render={Main} />
            <Route path={`${match.path}/consultas`}
              exact render={props => <Consultas {...props} />}
            />
            <Route path={`${match.path}/consultas/nueva`} exact
              render={NuevaConsulta} />
            <Route path={`${match.path}/pagos`} exact
              render={props => <Pagos {...props} />}
            />
            <Route path={`${match.path}/pagos/nuevo`} exact
              render={NuevoPago} />
            <Route path={`${match.path}/pacientes`}
              exact render={props => <Pacientes {...props} />}
            />
            <Route path={`${match.path}/pacientes/nuevo`}
              exact render={props => <NuevoPaciente {...props} />}
            />
            <Route path={`${match.path}/pacientes/:cedula`}
              exact render={props => <Paciente {...props} />}
            />
            <Route path={`${match.path}/medicos`}
              exact render={props => <Medicos {...props} />}
            />
            <Route path={`${match.path}/medicos/:id`}
              exact render={props => <Medico {...props} />}
            />
          </Switch>
        </div>
      </Wrapper>
    </React.Fragment>
  ) : (
    <Redirect to={'/ingresar'} />
  );
};

export default Recepcion;
