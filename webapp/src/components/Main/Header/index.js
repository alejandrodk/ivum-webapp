import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Header } from './style';
import ivum_logo from './ivum_logo_blanco.png';

const HeaderComp = () => {
    return (
        <Header>
            <div class="container">
              <nav id="navigation">
                <Link to="" className="logo"><img src={ivum_logo} alt="IVUM Ecografías" /></Link>
                <a aria-label="mobile menu" class="nav-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
                <ul class="menu-left">
                  <li><a href="#h_inicio">Inicio</a></li>
                  <li><a href="#h_nosotros">Nosotros</a></li>
                  <li><a href="#h_servicios">Servicios</a></li>
                  <li><a href="#h_contacto">Contacto</a></li>
                </ul>
              </nav>
            </div>
        </Header>
    )
}

export default HeaderComp