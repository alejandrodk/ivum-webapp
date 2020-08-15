import React from 'react';
import styled from 'styled-components';
import success from './success.gif';
import loading from './loading.gif';

const Div = styled.div`
  justify-content: center;

  h3 {
    opacity: 0;
    text-align: center;
    font-size: var(--titulo);
    color: var(--gris-dark);
    width: 100%;
    animation: showText 10s ease 1 1s;
  }
  img {
    width: 100px;
    margin: 2% 0;
  }

  @keyframes showText {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Confirmation = props => {
  return (
    <Div className="wrap">
      <h3>{props.message}</h3>
      {props.success && <img src={success} alt="" />}
      {props.loading && <img src={loading} alt="" />}
      {props.children}
    </Div>
  );
};

Confirmation.defaultProps = {
  message: 'Confirmation message',
  success: false,
  error: false,
  loading: false,
};

export default Confirmation;
