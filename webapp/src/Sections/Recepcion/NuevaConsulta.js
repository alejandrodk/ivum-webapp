import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FunctionalContainer from '../../components/FunctionalContainer';
import CreatePacient from '../../components/CreatePacient';
import RegisterAppointment from '../../components/RegisterAppointment';

const NuevaConsulta = () => (
  <Container>
    <Row>
      <Col md={8} lg={8}>
        <FunctionalContainer title="Paciente Nuevo">
          <CreatePacient />
        </FunctionalContainer>
        <FunctionalContainer title="Nueva Consulta">
          <RegisterAppointment />
        </FunctionalContainer>
      </Col>
      <Col md={3} lg={3}></Col>
    </Row>
  </Container>
);

export default NuevaConsulta;
