import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Header from './components/Header/';
import Sidebar from './components/Sidebar';
import BusquedaExamen from './components/BusquedaExamen';

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

const Recepcion = () => {
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
                                { title : 'Programar consulta', url : 'recepcion/consultas/nueva'}, 
                                { title : 'consultas', url : 'recepcion/consultas' }
                            ]
                        },
                        {   
                            category : 'Pagos',
                            icon : 'fas fa-file-invoice-dollar',
                            links : [
                                { title : 'Procesar pago', url : 'recepcion/pagos/nuevo'},
                                { title : 'Historial de pagos', url : 'recepcion/pagos'}
                            ]
                        },
                        {   
                            category : 'Pacientes',
                            icon : 'fas fa-users',
                            links : [
                                { title : 'Datos de pacientes', url : 'recepcion/pacientes'}, 
                                { title : 'Registrar nuevo paciente', url : 'recepcion/pacientes/nuevo' },
                                { title : 'Modificar datos de paciente', url : 'recepcion/pacientes/modificar' }
                            ]
                        },
                        {   
                            category : 'Médicos',
                            icon : 'fas fa-user-md',
                            links : [
                                { title : 'Listado de médicos', url : 'recepcion/medicos'},
                                { title : 'Consultas', url : 'recepcion/medicos/consultas'}
                            ]
                        },
                        {   
                            category : 'Exámenes',
                            icon : 'fas fa-file-medical-alt',
                            links : [
                                { title : 'Listado de Exámenes', url : 'recepcion/examenes'},
                                { title : 'Precios', url : 'recepcion/examenes/precios'}
                            ]
                        },
                    ]}
                />
                <div className="content">
                    <Container>
                        <Row>
                            <Col md={9} lg={9}>
                                <BusquedaExamen />
                            </Col>
                            <Col md={3} lg={3}>
                                <div className="prueba"></div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Wrapper>
        </React.Fragment>
    )
}

export default Recepcion;