import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BusquedaExamen from '../BusquedaExamen';
import Cotizaciones from '../Cotizaciones';
import DataTable from '../DataTable';

const Main = () => (
    <Container>
        <Row>
            <Col md={9} lg={9}>
                <BusquedaExamen />
                <DataTable 
                    title='Consultas Pendientes'
                    elements={[
                        {
                            first : 'Alejandro Barrios',
                            second : 'Ecografía Abdominal',
                            third : 'Dr Rafael Hernandez',
                            four : '12/05/2020 4:00 pm'
                        },
                        {
                            first : 'Alejandro Barrios',
                            second : 'Ecografía Abdominal',
                            third : 'Dr Rafael Hernandez',
                            four : '12/05/2020 4:00 pm'
                        },
                        {
                            first : 'Alejandro Barrios',
                            second : 'Ecografía Abdominal',
                            third : 'Dr Rafael Hernandez',
                            four : '12/05/2020 4:00 pm'
                        },
                        {
                            first : 'Alejandro Barrios',
                            second : 'Ecografía Abdominal',
                            third : 'Dr Rafael Hernandez',
                            four : '12/05/2020 4:00 pm'
                        },
                    ]}
                />
            </Col>
            <Col md={3} lg={3}>
                <Cotizaciones />
            </Col>
        </Row>
    </Container>
)

export default Main;