import React from 'react';
import {Link} from 'react-router-dom';
import {Item} from './style';

const ItemService = (props) => {
  return (
    <Item>
      <Link to={props.link}>
        <img src={props.img} alt={props.alt} />
        <h1>{props.title}</h1>
      </Link>
    </Item>
  );
};

ItemService.defaultProps = {
  link: '/',
  img: './default',
  alt: 'Service description',
  title: 'Service',
};

export default ItemService;
