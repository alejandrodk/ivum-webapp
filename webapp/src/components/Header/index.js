import React from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from './ivum_logo_blanco.png';
import Hora from '../Hora';
import LinkButton from '../LinkButton';
import DivHeader from './style';

const Recepcion = () => {
    return (
        <Row>
            <Col>
                <DivHeader className="wrap">
                    <img src={logo} alt="Instituto Venezolano de Ultrasonido"/>
                    <div className="opciones wrap">
                        <Hora/>
                        <LinkButton texto={'Salir'} link='/logout'/>
                    </div>
                </DivHeader>
            </Col>
        </Row>
    )
}

export default Recepcion;