import React from 'react';
import BusquedaDiv from './style';
import SearchBar from '../SearchBar';


const BusquedaExamen = () => {
    return (
        <BusquedaDiv className="wrap">
            <SearchBar 
                input_name='examen_search'
                label='Búsqueda rápida de exámenes'
                placeholder='Ingrese el nombre del examen a buscar'
                action='/recepcion'
                method='GET'
                button_text={<i class="fas fa-search"></i>}
            />
            <div className="data">
                <ul className="wrap">
                    <li>Exámen</li>
                    <li>Especialidad</li>
                    <li>Especialista</li>
                    <li>Precio</li>
                </ul>
                <ul className="wrap">
                    <li>Ecografia Tiroidea</li>
                    <li>Ecografias</li>
                    <li>Olivia Garcia</li>
                    <li><b>USD</b> $15 / <b>BsF</b> 11.750.000</li>
                </ul>
            </div>
        </BusquedaDiv>
    )
}

export default BusquedaExamen;