import React, { useRef } from 'react';
import Search from './styles';

const SearchFromTo = props => {
  const input_from = useRef();
  const input_to = useRef();

  const buttonHandler = e => {
    e.preventDefault();
    props.stateHandler({
      from_date: input_from.current.value,
      to_date: input_to.current.value,
    });
  };

  return (
    <Search action={props.action} method={props.method} className="wrap">
      <div className="item wrap">
        <label htmlFor="from_date">Desde</label>
        <input ref={input_from} type="date" name="from_date" />
      </div>
      <div className="item wrap">
        <label htmlFor="to_date">Hasta</label>
        <input ref={input_to} type="date" name="to_date" />
      </div>
      <button onClick={buttonHandler}>
        <i className="fas fa-search"></i>
      </button>
    </Search>
  );
};

SearchFromTo.defaultProps = {
  action: '/',
  method: 'POST',
};

export default SearchFromTo;
