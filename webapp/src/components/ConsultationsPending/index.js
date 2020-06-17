import React from 'react';
import Div from './style';
import FunctionalContainer from '../FunctionalContainer';

const ConsultationsPending = (props) => {
    return (
        <FunctionalContainer title='Consultas Pendientes'>
            <Div>
                {props.elements.map( item => (
                    <ul className='wrap' key={item.first + Math.random()}>
                        <li>{item.first}</li>
                        <li>{item.second}</li>
                        <li>{item.third}</li>
                        <li>{item.four}</li>
                    </ul>
                ))}
            </Div>
        </FunctionalContainer>
    )
}

ConsultationsPending.defaultProps = {
    title : 'Default Title',
    elements : [
        {
            first : 'first value',
            second : 'Second value',
            third : 'Third value',
            four : 'Four value'
        }
    ]
}

export default ConsultationsPending;