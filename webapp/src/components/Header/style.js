import styled from 'styled-components';

const DivHeader = styled.div`
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background: var(--azul-dark);
  align-items: center;
  padding: 0 5%;

  .opciones {
    width: 25%;
    justify-content: space-around;
  }

  img {
    width: 80px;
  }
`;

export default DivHeader;
