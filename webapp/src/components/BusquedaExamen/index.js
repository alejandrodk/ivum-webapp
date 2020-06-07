import React, { useState } from 'react';
import BusquedaDiv from './style';
import SearchBar from '../SearchBar';
import useDataFetching from '../hooks/useDataFetching';

const BusquedaExamen = () => {

    const [ params, setParams ] = useState(null);
    
    const { loading, data, error } = useDataFetching(`http://localhost:3000/examenes?search=${params}&price_detail=true&limit=1`)
    console.log(data)
    const stateHandler = (search) => {
        setParams(search);
    }

    return (
        <BusquedaDiv className="wrap">
            <SearchBar
                input_name='examen_search'
                label='Búsqueda rápida de exámenes'
                placeholder='Ingrese el nombre del examen a buscar'
                action='/recepcion'
                method='GET'
                stateHandler={stateHandler}
            />
            { !loading && data.length > 0 ?
                <div className="data">
                    <ul className="wrap">
                        <li>Exámen</li>
                        <li>Especialidad</li>
                        <li>Precio</li>
                    </ul>
                    <ul className="wrap">
                        <li>{data[0].nombre}</li>
                        <li>{data[0].especialidad}</li>
                        <li><b>USD</b> ${data[0].precio.usd} / <b>BsF</b> {new Intl.NumberFormat(["de-DE"]).format(data[0].precio.bsf)}</li>
                    </ul>
                </div>
             : ''
            }
        </BusquedaDiv>
    )
}

export default BusquedaExamen;