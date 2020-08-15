import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

const HoraDiv = styled.div`
  width: 50%;
  height: 25px;
  background: var(--gris-light);
  border-radius: var(--border-radius);
  justify-content: space-around;
  align-items: center;
  color: var(--gris-med);
  font-weight: 300;
  transition: 03s all;
  font-size: 14px;

  i {
    font-size: 12px;
  }
`;

const fechaActual = () => {
  const date = new Date();
  const dd = date.getDay();
  const mm = date.getDate() - 1;
  const yyyy = date.getFullYear();

  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  return {
    fecha: `${dd}/${mm}/${yyyy}`,
    hora: formatAMPM(date),
  };
};

const Hora = () => {
  const [horaState, setHora] = useState(fechaActual());
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setHora(fechaActual());

    return () => {};
  }, [counter]);

  setTimeout(() => {
    setCounter(counter + 1);
  }, 60000);

  const spanRef = useRef();

  const changeColor = () => {
    spanRef.current.style.color = 'var(--azul-claro)';
    setTimeout(() => {
      spanRef.current.style.color = 'var(--gris-med)';
    }, 1000);
  };

  return (
    <HoraDiv className="wrap">
      <i className="far fa-clock"></i>
      <span onChange={changeColor} ref={spanRef}>
        {horaState.fecha} | {horaState.hora}
      </span>
    </HoraDiv>
  );
};

export default Hora;
