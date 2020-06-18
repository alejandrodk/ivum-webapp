import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BusquedaExamen from '../../components/BusquedaExamen';
import Cotizaciones from '../../components/Cotizaciones';
import ConsultationsPending from '../../components/ConsultationsPending';

const Main = () => {
    return (
        <Container>
            <Row>
                <Col md={9} lg={9}>
                    <BusquedaExamen />
                    <ConsultationsPending />
                </Col>
                <Col md={3} lg={3}>
                    <Cotizaciones />
                </Col>
            </Row>
        </Container>
    )
}

export default Main;