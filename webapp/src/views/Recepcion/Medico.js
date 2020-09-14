import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

// eslint-disable-next-line max-len
import FunctionalContainer from '../../components/FunctionalContainer/FunctionalContainer';
import useDataFetching from '../../components/hooks/useDataFetching';
import {Avatar, Info, DataDiv} from './styles/PacientDetailStyles';

const PacientDetail = ({match}) => {
  const {id} = match.params;
  const {data, error} = useDataFetching(`/medicos/${id}`);
  const {data: consults, error: consultsError} = useDataFetching(
      // eslint-disable-next-line max-len
      `/consultas?specialist=${id}&full_data=true`,
  );
  if (error || consultsError) {
    return 'Error';
  }

  return data ? (
    <Container>
      <Row>
        <Col className="wrap">
          <Avatar className="wrap">
            <div className="image wrap">
              <img src={`${process.env.REACT_APP_API_URL}/img/userAvatar.png`}
                alt="user avatar" />
            </div>
          </Avatar>
          <Info className="wrap">
            <div className="header wrap">
              <h2>{`${data.nombre} ${data.apellido}`}</h2>
              <a href={`${match.path}/edit`}>
                <i className="fas fa-edit"></i>
              </a>
            </div>
            <div>
              <ul className="wrap">
                <li>Cédula: {data.cedula}</li>
                <li>Sexo: {data.sexo}</li>
                <li>Nacimiento: {data.nacimiento}</li>
                <li>Correo: {data.correo}</li>
                <li>Teléfono: {data.telefono}</li>
                <li>Dirección: {data.direccion}</li>
              </ul>
            </div>
          </Info>
        </Col>
      </Row>
      <Row>
        <Col>
          <FunctionalContainer title="Historial de consultas">
            <DataDiv className="wrap">
              <ul className="wrap">
                <li>Examen</li>
                <li>Paciente</li>
                <li>fecha</li>
                <li>hora</li>
                <li>estado</li>
                <li>pago</li>
                <li>resultado</li>
              </ul>
              <div className="data">
                {consults && consults.map((item, index) => (
                  <ul className="wrap" key={index}>
                    <li>{item.examen.nombre}</li>
                    <li>{`${item.paciente.nombre} ${item.paciente.apellido}`}</li>
                    <li>{item.fecha}</li>
                    <li>{item.hora}</li>
                    <li>{item.estado}</li>
                    <li>
                      <i className="fas fa-file-invoice-dollar"></i>
                    </li>
                    <li>
                      <i className="fas fa-file-invoice"></i>
                    </li>
                  </ul>
                ))}
              </div>
            </DataDiv>
          </FunctionalContainer>
        </Col>
      </Row>
    </Container>
  ) : (
    'cargando...'
  );
};

export default PacientDetail;
