import React from 'react';
import { NavLink } from 'react-router-dom';
import NavStyled from './styles';

const Sidebar = React.memo((props) => {

    const { title, links, home } = props;

    return (
        <NavStyled>
            <div className="header wrap">
                <div className="avatar wrap">
                    <img src="" alt=""/>
                </div>
                <h3>{title}</h3>
            </div>
            <div className="navigation">
                <NavLink to={props.home}>Inicio</NavLink>
                {links.map(item => (
                    <React.Fragment key={item.category + 1}>
                        <div className="header wrap" key={item.category + 2}>
                            <i className={item.icon}></i>
                            <h3>{item.category}</h3>
                        </div>
                        <ul key={item.category + 3} className="wrap">
                            {item.links.map( link => (
                                <li key={link.title}>
                                    <NavLink to={link.url}>
                                        {link.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </React.Fragment>
                ))}
            </div>
        </NavStyled>
    )
})

Sidebar.defaultProps = {
    title : 'titulo',
    home : '/',
    links : [
        {   
            category : 'Consultas',
            icon : 'fas fa-link',
            links : [
                {
                    title : 'Programar consulta',
                    url : 'consultas/nueva'
                },
                {
                    title : 'consultas',
                    url : 'consultas'
                }
            ]
        }
    ]
}

export default Sidebar;