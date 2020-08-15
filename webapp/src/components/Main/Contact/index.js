import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  .mapa {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 5%;
  }
  iframe {
    border: 0;
    width: 900px;
    height: 280px;
    border-radius: 10px;
    margin: auto;
  }
  .redes {
    justify-content: space-around;
    margin: 0 5%;
  }
  .redes a {
    width: 100%;
    color: white;
    align-items: center;
    justify-content: space-between;
  }
  .redes a i {
    width: 50px;
    background: white;
    color: var(--azul);
    font-size: 25px;
    text-align: center;
    border-radius: 50%;
    padding: 5%;
  }
  .redes a p {
    width: 70%;
  }

  @media (max-width: 768px) {
    .mapa {
      padding: 10%;
    }
    .redes div {
      justify-content: center;
    }
    .redes a p {
      display: none;
    }
    .redes a i {
      width: 30px;
      font-size: 20px;
    }
  }
`;

const Contact = props => {
  return (
    <Div>
      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1421.0855953416797!2d-66.8746326297389!3d10.492954622211515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sedificio+metropolitano+sabana+grande!5e0!3m2!1ses!2sar!4v1564105644748!5m2!1ses!2sar"
          width={600}
          height={450}
          frameborder={0}
          style={{ border: 0 }}
          allowfullscreen
          title="Dónde Estamos"
        ></iframe>
      </div>
      <div className="wrap redes">{props.children}</div>
    </Div>
  );
};

export default Contact;
