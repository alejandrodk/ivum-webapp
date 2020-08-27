import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';

// eslint-disable-next-line max-len
import FunctionalContainer from '../../components/FunctionalContainer/FunctionalContainer';
import { Avatar, Info, DataDiv } from './styles/PacientDetailStyles';

const PacientDetail = props => {
  const { match, user } = props;
  const { cedula } = match.params;
  const [data, setData] = useState(null);
  const [consults, setConsults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!data) {
      setLoading(true);
      const getData = async () => {
        try {
          const userData = await Axios.get(`http://Api.ivum.org/pacientes/${cedula}`, {
            headers: { token: user.token },
          });
          const consultData = await Axios.get(
            `http://Api.ivum.org/consultas?pacient=${cedula}&full_data=true`,
            {
              headers: { token: user.token },
            }
          );
          setLoading(false);
          setData(userData.data);
          setConsults(consultData.data);
        } catch (error) {
          setError(true);
          console.log(error);
        }
      };
      getData();
    }
  }, [user, cedula, data]);

  if (error) {
    return 'Error';
  }
  return !loading && data ? (
    <Container>
      <Row>
        <Col className="wrap">
          <Avatar className="wrap">
            <div className="image wrap">
              <img src="http://Api.ivum.org/img/userAvatar.png" alt="user avatar" />
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
                <li>especialista</li>
                <li>fecha</li>
                <li>hora</li>
                <li>estado</li>
                <li>pago</li>
                <li>resultado</li>
              </ul>
              <div className="data">
                {consults.map((item, index) => (
                  <ul className="wrap" key={index}>
                    <li>{item.examen.nombre}</li>
                    <li>{`${item.medico.nombre} ${item.medico.apellido}`}</li>
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
