import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  background: var(--blanco);
  margin-bottom: 2%;
  width: ${(props) => props.width};
  min-height: 150px;
  padding: var(--padding);
  border-radius: var(--border-radius);

  &::after {
    content: '';
    width: 30px;
    height: 20px;
    position: absolute;
    right: 2%;
    background: ${(props) => props.label_color};
    top: 10px;
    border-radius: var(--border-radius-med);
  }
  h2 {
    font-size: var(--verde);
    border-bottom: solid 2px var(--azul-claro);
    color: var(--gris-med);
    font-weight: 600;
    margin-bottom: 2%;
  }
`;

export default Div;
