import React from 'react';
import { Switch, Route } from 'react-router-dom';

import styled from 'styled-components';
import Header from './components/Header/';
import Sidebar from './components/Sidebar';
import Main from './Sections/Recepcion/Main';
import NuevaConsulta from './Sections/Recepcion/NuevaConsulta';
import NuevoPago from './Sections/Recepcion/NuevoPago';
import Consultas from './Sections/Recepcion/Consultas';
import Pagos from './Sections/Recepcion/Pagos';
import Pacientes from './Sections/Recepcion/Pacientes';
import Paciente from './Sections/Recepcion/Paciente';

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

const Recepcion = ({ match }) => {
    
    return (
        <React.Fragment>
            <Header />
            <Wrapper className="wrap">
                <Sidebar 
                    title="Recepción IVUM"
                    home="/recepcion"
                    links={[
                        {   
                            category : 'Consultas',
                            icon : 'fas fa-book-medical',
                            links : [
                                { title : 'Programar consulta', url : `${match.path}/consultas/nueva`}, 
                                { title : 'consultas', url : `${match.path}/consultas` }
                            ]
                        },
                        {   
                            category : 'Pagos',
                            icon : 'fas fa-file-invoice-dollar',
                            links : [
                                { title : 'Procesar pago', url : `${match.path}/pagos/nuevo`},
                                { title : 'Historial de pagos', url : `${match.path}/pagos`}
                            ]
                        },
                        {   
                            category : 'Pacientes',
                            icon : 'fas fa-users',
                            links : [
                                { title : 'Datos de pacientes', url : `${match.path}/pacientes`}, 
                                { title : 'Registrar nuevo paciente', url : `${match.path}/pacientes/nuevo`},
                                { title : 'Modificar datos de paciente', url : `${match.path}/pacientes/modificar` }
                            ]
                        },
                        {   
                            category : 'Médicos',
                            icon : 'fas fa-user-md',
                            links : [
                                { title : 'Listado de médicos', url : `${match.path}/medicos`},
                                { title : 'Consultas', url : `${match.path}/medicos/consultas`}
                            ]
                        },
                        {   
                            category : 'Exámenes',
                            icon : 'fas fa-file-medical-alt',
                            links : [
                                { title : 'Listado de Exámenes', url : `${match.path}/examenes`},
                                { title : 'Precios', url : `${match.path}/examenes/precios`}
                            ]
                        },
                    ]}
                />
                <div className="content">
                    <Switch>
                        <Route path={match.path} exact render={ Main }/>
                        <Route path={`${match.path}/consultas`} exact render={ Consultas }/>
                        <Route path={`${match.path}/consultas/nueva`} exact render={ NuevaConsulta }/>
                        <Route path={`${match.path}/pagos`} exact render={ Pagos }/>
                        <Route path={`${match.path}/pagos/nuevo`} exact render={ NuevoPago }/>
                        <Route path={`${match.path}/pacientes`} exact render={ Pacientes }/>
                        <Route path={`${match.path}/pacientes/:cedula`} exact render={ Paciente }/>
                    </Switch>
                </div>
            </Wrapper>
        </React.Fragment>
    )
}

export default Recepcion;