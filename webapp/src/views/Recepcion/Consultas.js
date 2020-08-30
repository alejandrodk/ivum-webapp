import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import {Div, DataDiv} from './styles/ConsultasPageStyles';
// eslint-disable-next-line max-len
import FunctionalContainer from '../../components/FunctionalContainer/FunctionalContainer';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchFromTo from '../../components/SearchFromTo/SearchFromTo';
import useDataFetching from '../../components/hooks/useDataFetching';

const Consultas = () => {
  const [uri, setUri] = useState(null);
  const [pacient, setPacient] = useState(null);
  const [date, setDate] = useState(null);
  const {data, error, loading} = useDataFetching(uri);

  useEffect(() => {
    let url = '/consultas?full_data=true';
    if (pacient || date) url += '&';
    if (pacient) url += `pacient=${pacient}&`;
    if (date && date.from_date) url += `date_from=${date.from_date}&`;
    if (date && date.to_date) url += `date_to=${date.to_date}&`;
    setUri(url);
  }, [pacient, date]);

  const pacientHandler = search => {
    setPacient(search);
  };

  const dateHandler = search => {
    setDate(search);
  };

  function formatearFecha(fecha) {
    const date = new Date(fecha);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  if (error) {
    return 'Error';
  }

  return !loading ? (
    <Container>
      <Row>
        <Col md={6} lg={6}>
          <Div>
            <SearchBar
              input_name="client_search"
              label="Búsqueda por paciente"
              placeholder="Ingresa la cédula del paciente"
              stateHandler={pacientHandler}
            />
          </Div>
        </Col>
        <Col md={6} lg={6}>
          <Div>
            <SearchFromTo stateHandler={dateHandler} />
          </Div>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={12}>
          <FunctionalContainer title="Consultas">
            <DataDiv className="wrap">
              <ul className="wrap">
                <li>Paciente</li>
                <li>Especialista</li>
                <li>Examen</li>
                <li>Fecha</li>
                <li>Estado</li>
                <li>Pago</li>
              </ul>
              <div className="data">
                {data.map(item => (
                  <ul key={item.id} className="wrap">
                    <li>
                      {`${item.paciente.nombre} ${item.paciente.apellido}`}
                    </li>
                    <li>{`${item.medico.nombre} ${item.medico.apellido}`}</li>
                    <li>{item.examen.nombre}</li>
                    <li>{formatearFecha(item.fecha)}</li>
                    <li>{item.estado}</li>
                    {item.comprobante_id ? (
                      <li>
                        <i className="far fa-file-alt"></i>
                      </li>
                    ) : (
                      <li></li>
                    )}
                  </ul>
                ))}
              </div>
              {/* <button>Anterior</button>
                            <button>Siguiente</button> */}
            </DataDiv>
          </FunctionalContainer>
        </Col>
      </Row>
    </Container>
  ) : (
    'Cargando...'
  );
};

export default Consultas;
