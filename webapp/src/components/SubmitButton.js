import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: var(--gradient-verde);
    color: var(--blanco);
    border-radius: var(--border-radius);
    font-weight: 400;
    width: 10%;
    border: none;
`;

const SubmitButton = (props) => {

    const prevent = (e) => {
        if(props.prevent){
            e.preventDefault()
        }
        props.handler()
    }

    return (
        <Button onClick={prevent} type={props.type} >
            {props.name}
        </Button>
    )
}

SubmitButton.defaultProps = {
    type : 'submit',
    name : 'Button',
    prevent : false,
    loading : false
}

export default SubmitButton;