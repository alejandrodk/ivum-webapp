import React, { useState } from 'react';
import styled from 'styled-components';

const CurrentDiv = styled.div`
    justify-content: space-between;
    align-items: center;
    color: var(--gris-med);
    margin: 2% 0;
    font-size: var(--texto);

    label {
        width: 25%;
    }
    input {
        width: 20%;
        border: solid 1px var(--gris-med);
        border-radius: var(--border-radius-med);
        color: var(--azul);
        text-align: center;
        font-weight: 600;
    }
    span {
        width: 40%;
        font-weight: 600;
    }
`;

const CurrentConverter = (props) => {

    const [ value, setValue ] = useState('');

    const inputHandler = (e) => {
        let amount = e.target.value;
        let total = amount * props.current_value;
        setValue(new Intl.NumberFormat(["de-DE"]).format(total))
    }

    return (
        <CurrentDiv className="wrap">
            <label htmlFor="current">{props.current_name} {props.current_symbol}</label>
            <input 
                type="text" 
                name="current" 
                placeholder="0"
                onChange={inputHandler}
            />
            <span>
                {value}
            </span>
        </CurrentDiv>
    )
}

CurrentConverter.defaultProps = {
    current_name : 'USD',
    current_symbol : '$',
    current_value : 1
}

export default CurrentConverter;