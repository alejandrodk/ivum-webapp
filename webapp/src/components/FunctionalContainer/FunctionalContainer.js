import React from 'react';
import Div from './style';

const FunctionalContainer = props => {
  return (
    <Div label_color={props.label_color} width={props.width}>
      <h2>{props.title}</h2>
      {props.children}
    </Div>
  );
};

FunctionalContainer.defaultProps = {
  title: 'Functional Container',
  width: '100%',
  label_color: 'var(--verde)',
};

export default FunctionalContainer;
