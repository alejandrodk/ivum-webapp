import React from 'react';

import PacientDetail from '../../components/PacientDetail/PacientDetail';

const Paciente = (props) => {
  /*
    Tuve que crear un nuevo componente y traer todo junto, ya que
    este componente no me permite utilizar estados
    */
  return <PacientDetail cedula={props.match.params.cedula} />;
};

export default Paciente;
