import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import {Div, DataDiv} from './styles/PacientsPageStyles';
// eslint-disable-next-line max-len
import FunctionalContainer from '../../components/FunctionalContainer/FunctionalContainer';
import SearchBar from '../../components/SearchBar/SearchBar';
import Confirmation from '../../components/Confirmation/Confirmation';
import useDataFetching from '../../components/hooks/useDataFetching';

const SearchDoctors = () => {
  const [uri, setUri] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [date, setDate] = useState(null);
  const {data, error, loading} = useDataFetching(uri);

  useEffect(() => {
    let url = '/medicos?';
    if (doctor || date) url += '&';
    if (doctor) url += `specialist=${doctor}&`;
    if (date && date.from_date) url += `date_from=${date.from_date}&`;
    if (date && date.to_date) url += `date_to=${date.to_date}&`;
    setUri(url);
  }, [doctor, date]);

  error && console.error(error);
  console.log('DEBUG');
  console.log(data);
  const doctorHandler = search => {
    setDoctor(search);
  };

  return (
    <Container>
      <Row>
        <Col md={6} lg={6}>
          <Div>
            <SearchBar
              input_name="doctor_search"
              label="Búsqueda por nombre"
              placeholder="Ingrese el nombre del especialista"
              stateHandler={doctorHandler}
            />
          </Div>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={12}>
          {!loading ? (
            <FunctionalContainer title="Especialistas">
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
                  {data && data.map(item => (
                    <ul key={item.id} className="wrap">
                      <li>{item.id}</li>
                      <li>{item.nombre}</li>
                      <li>{item.apellido}</li>
                      <li>{item.cedula}</li>
                      <li>{item.correo}</li>
                      <li>{item.telefono}</li>
                      <li>
                        <NavLink to={`medicos/${item.cedula}`}>
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

export default SearchDoctors;
