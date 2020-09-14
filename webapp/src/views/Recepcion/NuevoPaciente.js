import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CreatePacient from '../../components/CreatePacient/CreatePacient';
import FunctionalContainer from '../../components/FunctionalContainer/FunctionalContainer';

const NuevoPaciente = () => {
  return (
    <Container>
      <Row>
        <Col md={8} lg={8}>
          <FunctionalContainer title="Registrar nuevo paciente">
            <CreatePacient />
          </FunctionalContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default NuevoPaciente;
