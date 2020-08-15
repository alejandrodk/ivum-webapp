import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Div = styled.div`
  width: 20%;
`;

const ItemContact = (props) => {
  return (
    <Div className="wrap">
      <Link to={props.link} alt={props.alt} className="wrap">
        <i className={props.icon}></i>
        <p>{props.title}</p>
      </Link>
    </Div>
  );
};

ItemContact.defaultProps = {
  link: '/',
  alt: 'Main Contact Icon',
  icon: 'fas fa-question',
  title: 'Contact Item',
};

export default ItemContact;
