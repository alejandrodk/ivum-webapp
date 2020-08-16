import React from 'react';
import ItemService from '../ItemService';
import { Div } from './style';

const Services = props => {
  return (
    <Div className="wrap">
      {props.data.map((item, i) => (
        <ItemService link={item.link} img={item.img} alt={item.alt} title={item.title} key={i} />
      ))}
      {props.children}
    </Div>
  );
};

export default Services;
