import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Axios from 'axios';

import FunctionalContainer from '../FunctionalContainer/FunctionalContainer';
import {Avatar, Info, DataDiv} from './style';
import img from './avatar.png';

const PacientDetail = (props) => {
  const [data, setData] = useState([]);
  const [consults, setConsults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const user = Axios.get(`http://localhost:3000/pacientes/${props.cedula}`);
      const consult = Axios.get(
          `http://localhost:3000/consultas?pacient=${props.cedula}&full_data=true`,
      );
      try {
        const result = await Axios.all([user, consult]);
        setLoading(false);

        result[0].data && setData(result[0].data);
        result[1].data && setConsults(result[1].data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    getData();
  }, []);

  return !loading ? (
    <Container>
      <Row>
        <Col className="wrap">
          <Avatar className="wrap">
            <div className="image wrap">
              <img src={img} />
            </div>
          </Avatar>
          <Info className="wrap">
            <div className="header wrap">
              <h2>{`${data.nombre} ${data.apellido}`}</h2>
              <a href="">
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
