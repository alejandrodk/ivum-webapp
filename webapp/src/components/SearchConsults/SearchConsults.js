import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import FunctionalContainer from '../FunctionalContainer/FunctionalContainer';
import {Div, DataDiv} from './style';
import SearchBar from '../SearchBar/SearchBar';
import Axios from 'axios';
import SearchFromTo from '../SearchFromTo/SearchFromTo';
import Confirmation from '../Confirmation/Confirmation';

const SearchConsults = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [pacient, setPacient] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      let url = 'http://localhost:3000/consultas?full_data=true';

      if (pacient || date) url += '&';
      if (pacient) url += `pacient=${pacient}&`;
      if (date && date.from_date) url += `date_from=${date.from_date}&`;
      if (date && date.to_date) url += `date_to=${date.to_date}&`;

      try {
        const result = await Axios.get(url);
        setLoading(false);
        console.log(result);
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
  }, [pacient, date]);

  const pacientHandler = (search) => {
    setPacient(search);
  };

  const dateHandler = (search) => {
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
                {data.map((item) => (
                  <ul key={item.id} className="wrap">
                    <li>{`${item.paciente.nombre} ${item.paciente.apellido}`}</li>
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
  );
};

export default SearchConsults;
