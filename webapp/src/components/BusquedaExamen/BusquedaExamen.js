import React, {useState} from 'react';
import BusquedaDiv from './style';
import SearchBar from '../SearchBar/SearchBar';
import useDataFetching from '../hooks/useDataFetching';

const BusquedaExamen = () => {
  const [params, setParams] = useState(null);

  const {data, error} = useDataFetching(
      `/examenes?search=${params}&price_detail=true&limit=3`,
  );

  if (error) console.error(error);

  const stateHandler = search => {
    setParams(search);
  };

  return (
    <BusquedaDiv className="wrap">
      <SearchBar
        input_name="examen_search"
        label="Búsqueda rápida de exámenes"
        placeholder="Ingrese el nombre del examen a buscar"
        action="/recepcion"
        method="GET"
        stateHandler={stateHandler}
      />
      {!error && data.length > 0 ? (
        <div>
          <ul className="wrap titles">
            <li>Exámen</li>
            <li>Especialidad</li>
            <li>Precio</li>
          </ul>
          <div className="data">
            {data.map(item => (
              <ul className="wrap" key={item.nombre}>
                <li>{item.nombre}</li>
                <li>{item.especialidad}</li>
                <li>
                  <b>USD</b> ${item.precio.usd} / <b>BsF</b>{' '}
                  {new Intl.NumberFormat(['de-DE']).format(item.precio.bsf)}
                </li>
              </ul>
            ))}
          </div>
        </div>
      ) : (
        ''
      )}
    </BusquedaDiv>
  );
};

export default BusquedaExamen;
