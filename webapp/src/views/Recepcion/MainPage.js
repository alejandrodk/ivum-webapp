/* eslint-disable max-len */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BusquedaExamen from '../../components/BusquedaExamen/BusquedaExamen';
import Cotizaciones from '../../components/Cotizaciones/Cotizaciones';
import ConsultationsPending from '../../components/ConsultationsPending/ConsultationsPending';

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
  );
};

export default Main;
