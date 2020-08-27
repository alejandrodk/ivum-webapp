import React from 'react';
import CurrentsDiv from './style';
import CurrentConverter from '../CurrentConverter/CurrentConverter';
import useDataFetching from '../hooks/useDataFetching';

const Cotizaciones = () => {
  const { data, error } = useDataFetching(`http://api.ivum.org/cotizaciones`);

  if (error) console.error(error);

  return (
    <CurrentsDiv className="wrap">
      <h3>Cotizaciones</h3>
      {data.length > 0 ? (
        <React.Fragment>
          <CurrentConverter
            current_name={data[0].moneda}
            current_symbol={data[0].simbolo}
            current_value={data[0].valor_usd * data[2].valor_usd}
          />
          <CurrentConverter
            current_name={data[1].moneda}
            current_symbol={data[1].simbolo}
            current_value={data[1].valor_usd * data[2].valor_usd}
          />
          <div className="currentDetail">
            Cotización {data[2].simbolo}{' '}
            {new Intl.NumberFormat(['de-DE']).format(data[2].valor_usd)}
          </div>
        </React.Fragment>
      ) : (
        'Cargando...'
      )}
    </CurrentsDiv>
  );
};

export default Cotizaciones;
