import React from 'react';
import styled from 'styled-components';

export const Div = styled.div`
  color: var(--gris);
  padding: 10% 1%;
  text-align: justify;

  h1 {
    text-align: center;
    font-weight: 400;
    font-size: 1.8rem;
  }
  p {
    margin: auto;
    width: 60%;
    margin-top: 7%;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    p {
      width: 80%;
    }
  }
`;

const Presentation = () => {
  return (
    <Div>
      <h1>Nuestra Institución</h1>
      <p>
        Con más de 40 años de experiencia, nos enorgullece ser reconocidos como el más prestigioso
        centro de referencia para Ecosonogramas y centro de estudios de ecografía en todo el país.
        <br />
        <br />
        Brindando el servicio de mejor calidad en cuanto a ecografías se refiere y formando
        profesionales con el más alto nivel según los estándares internacionales
        <br />
        <br />
        En nuestros consultorios contamos con médicos y profesionales experimentados para brindarle
        la más amplia variedad en servicios ecográficos con la mejor calidad y equipos de última
        generación.
      </p>
    </Div>
  );
};

export default Presentation;
