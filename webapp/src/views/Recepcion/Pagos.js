import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';

import { Div, DataDiv } from './styles/PagosPageStyles';
// eslint-disable-next-line max-len
import FunctionalContainer from '../../components/FunctionalContainer/FunctionalContainer';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchFromTo from '../../components/SearchFromTo/SearchFromTo';
import Confirmation from '../../components/Confirmation/Confirmation';

const Pagos = props => {
  const { user } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [pacient, setPacient] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      let url = `${process.env.REACT_APP_API_URL}/comprobantes?`;

      if (pacient || date) url += '&';
      if (pacient) url += `pacient=${pacient}&`;
      if (date && date.from_date) url += `date_from=${date.from_date}&`;
      if (date && date.to_date) url += `date_to=${date.to_date}&`;

      try {
        const result = await Axios.get(url, { headers: { token: user.token } });
        setLoading(false);
        if (result.data) {
          setData(result.data);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };

    getData();
  }, [pacient, date, user]);

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
                  {data.map(item => (
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
