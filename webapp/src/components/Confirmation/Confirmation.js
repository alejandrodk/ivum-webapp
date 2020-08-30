/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
      {props.success &&
        <img src={`${process.env.REACT_APP_API_URL}/img/success.gif`} alt="" />}
      {props.loading &&
        <img src={`${process.env.REACT_APP_API_URL}/img/loading.gif`} alt="" />}
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

Confirmation.propTypes = {
  props: PropTypes.object,
};
export default Confirmation;
