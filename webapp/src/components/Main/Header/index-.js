import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Header } from './style-';
import ivum_logo from './ivum_logo_blanco.png';

const HeaderComp = () => {
    return (
        <Header>
            <nav className="wrap">
                <Link to="/" className="logo wrap"><img src={ivum_logo} alt="IVUM Ecografías"></img></Link>
                <ul className="menu wrap">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="#nosotros">Nosotros</Link></li>
                    <li><Link to="#servicios">Servicios</Link></li>
                    <li><Link to="#Contacto">Contacto</Link></li>
                    <li><Link to="#Contacto">Ingresar</Link></li>
                </ul>
            </nav>
        </Header>
    )
}

export default HeaderComp