import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

import { Div, DataDiv } from './styles/PacientsPageStyles';
// eslint-disable-next-line max-len
import FunctionalContainer from '../../components/FunctionalContainer/FunctionalContainer';
import SearchBar from '../../components/SearchBar/SearchBar';
import Confirmation from '../../components/Confirmation/Confirmation';

const SearchPacients = ({ user }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [pacient, setPacient] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      let url = 'http://api.ivum.org/pacientes?';

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

  return (
    <Container>
      <Row>
        <Col md={6} lg={6}>
          <Div>
            <SearchBar
              input_name="client_search"
              label="Búsqueda por cédula"
              placeholder="Ingresa la cédula del paciente"
              stateHandler={pacientHandler}
            />
          </Div>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={12}>
          {!loading ? (
            <FunctionalContainer title="Pacientes">
              <DataDiv className="wrap">
                <ul className="wrap">
                  <li>N°</li>
                  <li>Nombre</li>
                  <li>Apellido</li>
                  <li>Cédula</li>
                  <li>Correo</li>
                  <li>Teléfono</li>
                  <li>Detalle</li>
                </ul>
                <div className="data">
                  {data.map(item => (
                    <ul key={item.id} className="wrap">
                      <li>{item.id}</li>
                      <li>{item.nombre}</li>
                      <li>{item.apellido}</li>
                      <li>{item.cedula}</li>
                      <li>{item.correo}</li>
                      <li>{item.telefono}</li>
                      <li>
                        <NavLink to={`pacientes/${item.cedula}`}>
                          <i className="far fa-eye"></i>
                        </NavLink>
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

export default SearchPacients;
