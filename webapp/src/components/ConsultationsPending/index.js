import React, { useEffect, useState } from 'react';
import Div from './style';
import FunctionalContainer from '../FunctionalContainer';
import Axios from 'axios';

const ConsultationsPending = (props) => {

    const [ consultas, setConsultas ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(()=> {
        setLoading(true)
        Axios.get('http://localhost:3000/consultas?full_data=true&state=pendiente')
        .then(res => {
            if(res.data){
                setConsultas(res.data)
                setLoading(false)
            }
        })
        .catch(error => console.log(error))
    },[])

    return (
        !loading ?
            <FunctionalContainer title='Consultas Pendientes'>
            <Div>
                {consultas.map( item => (
                    <ul className='wrap' key={item.id + Math.random()}>
                        <li>{`${item.paciente.nombre} ${item.paciente.apellido}`}</li>
                        <li>{item.examen.nombre}</li>
                        <li>{`${item.medico.nombre} ${item.medico.apellido}`}</li>
                        <li>{`${item.fecha} ${item.hora}`}</li>
                    </ul>
                ))}
            </Div>
        </FunctionalContainer>
        :
        'Cargando....'
    )
}

ConsultationsPending.defaultProps = {
    title : 'Default Title',
    elements : [
        {
            first : 'first value',
            second : 'Second value',
            third : 'Third value',
            four : 'Four value'
        }
    ]
}

export default ConsultationsPending;