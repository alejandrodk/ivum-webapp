import React from 'react';
import { Link } from 'react-router-dom';
import {Div} from './style';

const ActionButton = (props) => {
    return (
        <Div className='wrap' color={props.color}>
            <Link to={props.link} className='wrap'>
                <i className={props.icon}></i>
                <p>{props.desc}</p>
            </Link>
        </Div>
    )
}

ActionButton.defaultProps = {
    color : 'gray',
    link : '/',
    icon : 'fas fa-rss-square',
    alt : 'Action Button',
    desc : 'Action Button'
}

export default ActionButton