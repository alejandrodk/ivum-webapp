import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { setToken, authSessionClient } from '../../Helpers/auth';
import SubmitButton from '../SubmitButton';
import logo from './ivum_logo.png';
import Div from './style';
import Axios from 'axios';

const LoginForm = () => {

    const [ loading, setLoading ] = useState(false);
    const [ usuario, setUsuario ] = useState(null);
    const [ error, setError ] = useState(false);
    const [ accessData, setAccessData ] = useState({ user : null, paswd : null})

    useEffect(() => {
        authSessionClient()
        .then(res => {
            if(res){
                setUsuario(true)
            }
        })
    },[])

    const formHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        setAccessData({
            user : e.target[0].value,
            paswd : e.target[1].value
        })
        validateLogin();
    }

    const validateLogin = async () => {
        await Axios.post('http://localhost:3000/usuarios/login',{
            usuario : accessData.user,
            clave : accessData.paswd
        })
        .then(res => {
            setLoading(false)
            let data = res.data;
            if(data.token){
                setUsuario(true)
                setToken(data.token)
                sessionStorage.setItem('ivum_user', JSON.stringify(data.user))
            } else {
                setError(true)
            }
        })
        .catch(err => console.error(err))
    }

    return (
        !usuario ? 
            <Div className="wrap">
            <img src={logo} alt="Instituto Venezolano de Ultrasonido en Medicina"/>
            <form action="/usuarios/login" className="wrap" method='POST' onSubmit={formHandler}>
            {error ? <h3>Usuario o contraseña inválidos</h3> : ''}
                <label htmlFor="username">Usuario</label>
                <input type="text" name="username" id=""/>
                <label htmlFor="password">Clave</label>
                <input type="password" name="password" id=""/>
                { loading ? 
                    'cargando...'
                    :
                    <SubmitButton
                        type='submit'
                        name='Ingresar'
                        prevent={false}
                        width='50%'
                    />
                }
            </form>
        </Div>    
        :
        <Redirect to='/recepcion'/>
    )
}

export default LoginForm;
