import React from 'react';
import Div from './style';
import FunctionalContainer from '../FunctionalContainer/FunctionalContainer';
import useDataFetching from '../hooks/useDataFetching';

const ConsultationsPending = props => {
  const {data: consultas, error} = useDataFetching(
      '/consultas?full_data=true&state=pendiente',
  );
  error && console.error(error);
  return (
    <FunctionalContainer title="Consultas Pendientes">
      <Div>
        {consultas !== [] ?
          consultas.map((item, i) => (
            <ul className="wrap" key={i}>
              <li>{`${item.paciente.nombre} ${item.paciente.apellido}`}</li>
              <li>{item.examen.nombre}</li>
              <li>{`${item.medico.nombre} ${item.medico.apellido}`}</li>
              <li>{`${item.fecha} ${item.hora}`}</li>
            </ul>
          )) : 'cargando...'}
      </Div>
    </FunctionalContainer>
  );
};

ConsultationsPending.defaultProps = {
  title: 'Default Title',
  elements: [
    {
      first: 'first value',
      second: 'Second value',
      third: 'Third value',
      four: 'Four value',
    },
  ],
};

export default ConsultationsPending;
