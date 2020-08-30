import React, {useEffect, useState, useContext} from 'react';
import Div from './style';
import FunctionalContainer from '../FunctionalContainer/FunctionalContainer';
import Axios from 'axios';
import {AppContext} from '../../common/AppContext';

const ConsultationsPending = props => {
  const [consultas, setConsultas] = useState(null);
  const [loading, setLoading] = useState(false);
  const {user} = useContext(AppContext);

  useEffect(() => {
    if (!consultas) {
      const getConsultas = async () => {
        setLoading(true);
        try {
          // eslint-disable-next-line max-len
          const {data} = await Axios.get(`${process.env.REACT_APP_API_URL}/consultas?full_data=true&state=pendiente`, {
            headers: {token: user.token},
          });
          if (data) {
            setConsultas(data);
            setLoading(false);
          }
        } catch (err) {
          console.error(err);
        }
      };
      getConsultas();
    }
  }, [user, consultas]);

  return !loading ? (
    <FunctionalContainer title="Consultas Pendientes">
      <Div>
        {consultas &&
          consultas.map((item, i) => (
            <ul className="wrap" key={i}>
              <li>{`${item.paciente.nombre} ${item.paciente.apellido}`}</li>
              <li>{item.examen.nombre}</li>
              <li>{`${item.medico.nombre} ${item.medico.apellido}`}</li>
              <li>{`${item.fecha} ${item.hora}`}</li>
            </ul>
          ))}
      </Div>
    </FunctionalContainer>
  ) : (
    'Cargando....'
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
