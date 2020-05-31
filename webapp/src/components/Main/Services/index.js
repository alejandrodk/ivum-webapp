import React from 'react';
import ItemService from '../ItemService';
import laboratorioImg from './laboratorio_clinico.png';
import consultasImg from './consultas_medicas.png';
import ecografiasImg from './ecosonogramas_ecografias.png';
import cursosImg from './laboratorio_clinico.png';
import { Div } from './style';

const Services = (props) => {
    return (
        <Div className='wrap'>
            <ItemService 
            link=''
            img={laboratorioImg}
            alt='Laboratorio Clínico'
            title='Laboratorio Clínico'
            />
            <ItemService 
            link=''
            img={ecografiasImg}
            alt='Ecografías Especializadas'
            title='Ecografías Especializadas'
            />
            <ItemService 
            link=''
            img={consultasImg}
            alt='Consultas Médicas'
            title='Consultas Médicas'
            />
            <ItemService 
            link=''
            img={cursosImg}
            alt='Cursos Médicos'
            title='Cursos Médicos'
            />
            { props.children }
        </Div>
    )
}

export default Services;