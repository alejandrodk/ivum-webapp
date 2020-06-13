import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BusquedaExamen from '../BusquedaExamen';
import Cotizaciones from '../Cotizaciones';

const Main = () => (
    <Container>
        <Row>
            <Col md={9} lg={9}>
                <BusquedaExamen />
            </Col>
            <Col md={3} lg={3}>
                <Cotizaciones />
            </Col>
        </Row>
    </Container>
)

export default Main;