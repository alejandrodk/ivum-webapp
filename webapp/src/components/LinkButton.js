import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  width: 30%;
  height: 25px;
  color: var(--blanco);
  background: var(--verde);
  background: var(--gradient-verde);
  border-radius: var(--border-radius);
  border: none;
  text-align: center;
  font-weight: 600;
  transition: 03s all;
`;

const LinkButton = props => {
  const onClickButton = e => {
    if (props.prevent) {
      e.preventDefault();
      props.onClick();
    }
  };
  if (props.loading) return 'cargando....';
  return (
    <Link href={props.link} onClick={onClickButton}>
      {props.texto}
    </Link>
  );
};

LinkButton.defaultProps = {
  link: '/',
  texto: 'Text button',
  prevent: false,
  loading: false,
};

export default LinkButton;
