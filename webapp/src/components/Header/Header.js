import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Hora from '../Hora/Hora';
import LinkButton from '../LinkButton';
import DivHeader from './style';

const Recepcion = () => {
  return (
    <Row>
      <Col>
        <DivHeader className="wrap">
          <img
            src="http://Api.ivum.org/img/ivum_logo_blanco.png"
            alt="Instituto Venezolano de Ultrasonido"
          />
          <div className="opciones wrap">
            <Hora />
            <LinkButton texto={'Salir'} link="/logout" />
          </div>
        </DivHeader>
      </Col>
    </Row>
  );
};

export default Recepcion;
