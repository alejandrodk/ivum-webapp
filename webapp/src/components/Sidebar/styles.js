import styled from 'styled-components';

const NavStyled = styled.nav`
  background: var(--blanco);
  padding: var(--padding);
  border-radius: var(--border-radius);
  > .header {
    width: 100%;
    height: 150px;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 10%;
  }
  .header .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: auto;
    background: white;
    z-index: 2;
    position: relative;
    overflow: hidden;
    justify-content: center;
    align-items: center;
  }
  .header .avatar img {
    width: 100%;
  }
  > .header::after {
    content: ' ';
    width: 110px;
    height: 110px;
    background: var(--gradient-verde);
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    top: 3px;
  }
  > .header h3 {
    width: 100%;
    text-align: center;
    color: var(--gris-dark);
    font-weight: 600;
    font-size: var(--titulo);
  }
  .navigation > a {
    display: block;
    width: 100%;
    text-decoration: none;
    font-weight: 600;
    color: var(--azul-claro);
    margin-bottom: 10%;
    text-align: center;
    padding: 3px;
  }
  .navigation .header {
    align-items: center;
    margin-bottom: 2%;
  }
  .navigation .header h3 {
    color: var(--gris-dark);
    font-weight: 600;
  }
  .navigation .header i {
    margin-right: 10px;
    color: var(--azul-claro);
  }
  .navigation ul li,
  .navigation ul li a {
    width: 100%;
    list-style: none;
    color: var(--gris-med);
    font-weight: 300;
    font-size: var(--texto);
  }
  .navigation ul {
    margin-bottom: 5%;
  }
`;

export default NavStyled;
