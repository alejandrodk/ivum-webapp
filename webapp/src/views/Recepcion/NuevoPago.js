import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// eslint-disable-next-line max-len
import FunctionalContainer from '../../components/FunctionalContainer/FunctionalContainer';
import CreateInvoice from '../../components/CreateInvoice/CreateInvoice';
import Cotizaciones from '../../components/Cotizaciones/Cotizaciones';

const NuevoPago = () => (
  <Container>
    <Row>
      <Col md={8} lg={8}>
        <FunctionalContainer title="Procesar pago">
          <CreateInvoice />
        </FunctionalContainer>
      </Col>
      <Col md={3} lg={3}>
        <Cotizaciones />
      </Col>
    </Row>
  </Container>
);

export default NuevoPago;
