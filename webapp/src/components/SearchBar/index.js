import React from 'react';
import Search from './styles';

const SearchBar = (props) => {
    return (
        <Search 
            action={props.action} 
            method={props.method}
            className="wrap"
        >
            <label htmlFor={props.input_name}>{props.label}</label>
            <input 
                type="text" 
                name={props.input_name} 
                placeholder={props.placeholder}
            />
            <button type="submit">{props.button_text}</button>
        </Search>
    )
}

SearchBar.defaultProps = {
    input_name : 'default',
    label : 'Default Input',
    placeholder : 'Default Placeholder',
    action : '/',
    method : 'POST',
    button_text : 'Submit'
}
export default SearchBar;