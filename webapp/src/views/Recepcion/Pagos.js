import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import {Div, DataDiv} from './styles/PagosPageStyles';
// eslint-disable-next-line max-len
import FunctionalContainer from '../../components/FunctionalContainer/FunctionalContainer';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchFromTo from '../../components/SearchFromTo/SearchFromTo';
import Confirmation from '../../components/Confirmation/Confirmation';
import useDataFetching from '../../components/hooks/useDataFetching';

const Pagos = props => {
  const [uri, setUri] = useState(null);
  const [pacient, setPacient] = useState(null);
  const [date, setDate] = useState(null);
  const {data, error, loading} = useDataFetching(uri);

  useEffect(() => {
    let url = '/comprobantes?';
    if (pacient || date) url += '&';
    if (pacient) url += `pacient=${pacient}&`;
    if (date && date.from_date) url += `date_from=${date.from_date}&`;
    if (date && date.to_date) url += `date_to=${date.to_date}&`;
    setUri(url);
  }, [pacient, date]);

  error && console.error(error);

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

  return (
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
          {!loading ? (
            <FunctionalContainer title="Pagos">
              <DataDiv className="wrap">
                <ul className="wrap">
                  <li>N°</li>
                  <li>Nombre</li>
                  <li>Método de pago</li>
                  <li>Moneda</li>
                  <li>Monto</li>
                  <li>Fecha</li>
                  <li>Detalle</li>
                </ul>
                <div className="data">
                  {data && data.map(item => (
                    <ul key={item.id} className="wrap">
                      <li>{item.id}</li>
                      <li>{item.nombre}</li>
                      <li>{item.metodo_pago}</li>
                      <li>{item.moneda}</li>
                      <li>{item.total}</li>
                      <li>{formatearFecha(item.fecha)}</li>
                      <li>
                        <i className="far fa-file-alt"></i>
                      </li>
                    </ul>
                  ))}
                </div>
                {/* <button>Anterior</button>
                            <button>Siguiente</button> */}
              </DataDiv>
            </FunctionalContainer>
          ) : (
            <Confirmation loading={true} message="Cargando" />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Pagos;
