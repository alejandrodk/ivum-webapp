import React, {useRef} from 'react';
import Search from './styles';

const SearchBar = props => {
  const input = useRef();

  const buttonHandler = e => {
    e.preventDefault();
    props.stateHandler(input.current.value);
  };

  return (
    <Search action={props.action} method={props.method} className="wrap">
      <label htmlFor={props.input_name}>{props.label}</label>
      <input ref={input} type="text" name={props.input_name}
        placeholder={props.placeholder} />
      <button onClick={buttonHandler}>
        <i className="fas fa-search"></i>
      </button>
    </Search>
  );
};

SearchBar.defaultProps = {
  input_name: 'default',
  label: 'Default Input',
  placeholder: 'Default Placeholder',
  action: '/',
  method: 'POST',
};

export default SearchBar;
