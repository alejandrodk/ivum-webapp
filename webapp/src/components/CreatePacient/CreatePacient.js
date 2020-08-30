import React, { useState, useContext } from 'react';
import Axios from 'axios';

import { AppContext } from '../../common/AppContext';
import NewPacientForm from './style';
import SubmitButton from '../SubmitButton';
import Confirmation from '../Confirmation/Confirmation';

const CreatePacient = () => {
  const { user } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const [error, setError] = useState(false);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [sexo, setSexo] = useState('');
  const [nacimiento, setNacimiento] = useState('');
  const [cedula, setCedula] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');

  const inputHandler = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    if (name === 'nombre') setNombre(value);
    if (name === 'apellido') setApellido(value);
    if (name === 'sexo') setSexo(value);
    if (name === 'nacimiento') setNacimiento(value);
    if (name === 'cedula') setCedula(value);
    if (name === 'correo') setCorreo(value);
    if (name === 'direccion') setDireccion(value);
    if (name === 'telefono') setTelefono(value);
  };

  const formHandler = e => {
    e.preventDefault();
    setLoading(true);
    submitData();
  };
  const submitData = async () => {
    await Axios.post(
      `${process.env.REACT_APP_API_URL}/pacientes/`,
      {
        nombre,
        apellido,
        sexo,
        nacimiento,
        cedula,
        correo,
        direccion,
        telefono,
      },
      {
        headers: { token: user.token },
      }
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
    <NewPacientForm className="wrap" onSubmit={formHandler}>
      <input
        onChange={inputHandler}
        type="text"
        name="nombre"
        required
        value={nombre}
        placeholder="Nombre"
      />
      <input
        onChange={inputHandler}
        type="text"
        name="apellido"
        required
        value={apellido}
        placeholder="Apellido"
      />
      <select onChange={inputHandler} name="sexo" required>
        <option value="null">Sexo</option>
        <option value="M">masculino</option>
        <option value="F">femenino</option>
      </select>
      <input onChange={inputHandler} type="date" name="nacimiento" required value={nacimiento} />
      <input
        onChange={inputHandler}
        type="text"
        name="cedula"
        required
        value={cedula}
        placeholder="Cédula"
      />
      <input
        onChange={inputHandler}
        type="email"
        name="correo"
        value={correo}
        placeholder="Correo"
      />
      <input
        onChange={inputHandler}
        type="text"
        name="direccion"
        required
        value={direccion}
        placeholder="Dirección"
      />
      <input
        onChange={inputHandler}
        type="text"
        name="telefono"
        required
        value={telefono}
        placeholder="Teléfono"
      />
      {error ? (
        <p>Error al registrar paciente, verifique los datos ingresados</p>
      ) : (
        <p>Complete todos los datos</p>
      )}
      {loading && <Confirmation message="Cargando" loading={true} />}
      <SubmitButton name="Registrar" loading="false" />
    </NewPacientForm>
  ) : (
    <Confirmation message="Paciente Creado" success={true} />
  );
};

export default CreatePacient;
