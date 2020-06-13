import React from 'react';
import Div from './style';

const DataTable = (props) => {
    return (
        <Div>
            <h2>Consultas Pendientes</h2>
            <div className='wrap'>
                {props.elements.map( item => (
                    <ul className='wrap' key={item.first + Math.random()}>
                        <li>{item.first}</li>
                        <li>{item.second}</li>
                        <li>{item.third}</li>
                        <li>{item.four}</li>
                    </ul>
                ))}
            </div>
        </Div>
    )
}

DataTable.defaultProps = {
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

export default DataTable;