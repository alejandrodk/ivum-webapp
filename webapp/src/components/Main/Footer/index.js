import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './ivum_logo_blanco.png';

const Div = styled.div`
  margin-top: 5%;

  .indice img {
    width: 90px;
    margin-bottom: 10px;
    display: block;
  }
  .indice a {
    width: 100%;
    margin-left: 10px;
    color: white;
    text-decoration: none;
  }
  .direccion {
    margin: auto;
  }
  .direccion h3 {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    .indice img {
      width: 25%;
    }
    .indice {
      flex-wrap: wrap;
      margin: 5% 0;
    }
  }
`;

const Footer = () => {
  return (
    <Div className="wrap">
      <Col xs={12} sm={12} md={4} lg={4}>
        <div className="indice wrap">
          <img src={logo} alt="Instituto Venezolano de Ultrasonido en Medicina" />
          <Link to="">Nosotros</Link>
          <Link to="">Servicios</Link>
          <Link to="">Dónde Estamos</Link>
        </div>
      </Col>
      <Col xs={12} sm={12} md={8} lg={8}>
        <div className="direccion">
          <h3>Dónde estamos</h3>
          <p>
            Boulevard de Sabana Grande, Edif. Metropolitano, Piso 2, Ofic. 1 <br /> (al Lado de
            Dorsay) El Recreo, Caracas - Venezuela
          </p>
        </div>
      </Col>
    </Div>
  );
};

export default Footer;
