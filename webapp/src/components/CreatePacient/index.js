import React, { useState } from 'react';
import { getToken } from '../../Helpers/auth';
import NewPacientForm from './style';
import SubmitButton from '../SubmitButton';
import Axios from 'axios';

const CreatePacient = () => {

    const [ loading, setLoading ] = useState(false);
    const [ created, setCreated ] = useState(false);
    const [ error, setError ] = useState(false);
    
    const [ nombre, setNombre ] = useState('');
    const [ apellido, setApellido ] = useState('');
    const [ cedula, setCedula ] = useState('');
    const [ correo, setCorreo ] = useState('');
    const [ direccion, setDireccion ] = useState('');
    const [ telefono, setTelefono ] = useState('');

    const inputHandler = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        if(name === 'nombre') setNombre(value)
        if(name === 'apellido') setApellido(value)
        if(name === 'cedula') setCedula(value)
        if(name === 'correo') setCorreo(value)
        if(name === 'direccion') setDireccion(value)
        if(name === 'telefono') setTelefono(value)
    }
    
    const formHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        submitData()
    }
    const submitData = async () => {
        await Axios.post('http://localhost:3000/pacientes/',{
            nombre,
            apellido,
            cedula,
            correo,
            direccion,
            telefono
        },{ 
            headers: {'token': getToken()} 
        })
        .then(res => {
            setLoading(false)
            if(res.status === 201){
                setCreated(true)
            } else {
                setError(true)
            }
        })
        .catch(error => {
            setError(true)
            console.error(error)
        })
    }

    return (
        !created ?
            <NewPacientForm className='wrap' onSubmit={formHandler}>
                <input onChange={inputHandler} type="text" name="nombre" required value={nombre} placeholder='Nombre'/>
                <input onChange={inputHandler} type="text" name="apellido" required value={apellido} placeholder='Apellido'/>
                <input onChange={inputHandler} type='text' name="cedula" required value={cedula} placeholder='Cédula'/>
                <input onChange={inputHandler} type="email" name="correo" value={correo} placeholder='Correo'/>
                <input onChange={inputHandler} type="text" name="direccion" required value={direccion} placeholder='Dirección'/>
                <input onChange={inputHandler} type="text" name="telefono" required value={telefono} placeholder='Teléfono'/>
                {(error ? <p>Error al registrar paciente, verifique los datos ingresados</p> : <p>Complete todos los datos</p> )}
                {(loading && <p>Cargando...</p> )}
                <SubmitButton name='Registrar' loading='false' />
            </NewPacientForm> 
        :
        'Paciente creado exitosamente'
    )
}

export default CreatePacient;