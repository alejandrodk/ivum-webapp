import React, {useState, useEffect, useContext} from 'react';
import Axios from 'axios';

import {AppContext} from '../../common/AppContext';
import AppointmentForm from './style';
import SubmitButton from '../SubmitButton';
import Confirmation from '../Confirmation/Confirmation';

const RegisterAppointment = () => {
  const {user} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const [error, setError] = useState(false);

  const [paciente, setPaciente] = useState('');
  const [examen, setExamen] = useState('');
  const [especialista, setEspecialista] = useState('');
  const [observacion, setObservacion] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [examenes, setExamenes] = useState(null);
  const [especialistas, setEspecialistas] = useState(null);

  // Cargar examenes en select
  useEffect(() => {
    if (!examenes) {
      const getExamenes = async () => {
        try {
          const {data} = await Axios.get(
              `${process.env.REACT_APP_API_URL}/examenes/`, {
                headers: {token: user.token},
              });
          if (data) {
            setExamenes(data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getExamenes();
    }
  }, [examenes, user]);
  // cargar especialistas del examen seleccionado
  const selectExamenHandler = e => {
    const value = e.target.value;
    setExamen(value);
    Axios.get(
        `${process.env.REACT_APP_API_URL}/examenes/${value}/especialistas`, {
          headers: {token: user.token},
        }).then(res => setEspecialistas(res.data.medicos));
  };

  const inputHandler = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    if (name === 'paciente') setPaciente(value);
    if (name === 'especialista') setEspecialista(value);
    if (name === 'observacion') setObservacion(value);
    if (name === 'fecha') setFecha(value);
    if (name === 'hora') setHora(value);
  };

  const formHandler = e => {
    e.preventDefault();
    console.log({
      cedula_paciente: paciente,
      medico_id: especialista,
      examen_id: examen,
      observacion,
      fecha,
      hora,
    });
    setLoading(true);
    submitData();
  };
  const submitData = async () => {
    await Axios.post(
        `${process.env.REACT_APP_API_URL}/consultas/`,
        {
          cedula_paciente: paciente,
          medico_id: especialista,
          examen_id: examen,
          observacion,
          fecha,
          hora,
        },
        {
          headers: {token: user.token},
        },
    )
        .then(res => {
          setLoading(false);
          if (res.status === 201) {
            setCreated(true);
          } else {
            setError(true);
          }
        })
        .catch(error => {
          setError(true);
          console.error(error);
        });
  };

  return !created ? (
    <AppointmentForm className="wrap" onSubmit={formHandler}>
      <input type="text" name="paciente" placeholder="Cédula paciente"
        onChange={inputHandler} />
      <select name="examen" value={examen} required
        onChange={selectExamenHandler}>
        <option value="null">Selecciona un Exámen</option>
        {examenes &&
          examenes.map(item => (
            <option key={item.id + Math.random()} value={item.id}>
              {item.nombre}
            </option>
          ))}
      </select>
      <select name="especialista" onChange={inputHandler} required>
        <option value={especialista}>Selecciona un especialista</option>
        {especialistas &&
          especialistas.map(item => (
            <option
              key={item.id + Math.random()}
              value={item.id}
              selected={especialista == item.id? true : false}
            >{`${item.nombre} ${item.apellido}`}</option>
          ))}
      </select>
      <input
        onChange={inputHandler}
        type="text"
        name="observacion"
        value={observacion}
        placeholder="Observación"
      />
      <input
        onChange={inputHandler}
        type="date"
        name="fecha"
        required
        value={fecha}
        placeholder="Fecha"
      />
      <input
        onChange={inputHandler}
        type="time"
        name="hora"
        value={hora}
        placeholder="Hora"
      />
      {error ? (
        <p>Error al registrar la consulta, verifique los datos ingresados</p>
      ) : (
        <p>Complete todos los datos</p>
      )}
      {loading && <Confirmation message="Cargando" loading={true} />}
      <SubmitButton name="Registrar" loading="false" />
    </AppointmentForm>
  ) : (
    <Confirmation message="Consulta registrada exitosamente" success={true}>
      <a href="/recepcion/pagos/nuevo">Registrar Pago</a>
    </Confirmation>
  );
};

export default RegisterAppointment;
