import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './style';
import ivum_logo from './ivum_logo_blanco.png';

const HeaderComp = () => {
  return (
    <Header>
      <div className="container">
        <nav id="navigation">
          <Link to="/" className="logo">
            <img src={ivum_logo} alt="IVUM Ecografías" />
          </Link>
          <a href="/" aria-label="mobile menu" className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </a>
          <ul className="menu-left">
            <li>
              <Link to="#h_inicio">Inicio</Link>
            </li>
            <li>
              <Link to="#h_nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="#h_servicios">Servicios</Link>
            </li>
            <li>
              <Link to="#h_contacto">Contacto</Link>
            </li>
            <li>
              <Link to="ingresar">Ingresar</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Header>
  );
};

export default HeaderComp;
