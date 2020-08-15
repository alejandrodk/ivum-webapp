import styled from 'styled-components';

export const Avatar = styled.div`
  background: var(--blanco);
  width: 15%;
  border-radius: var(--border-radius);
  margin-bottom: 2%;

  .image {
    width: 150px;
    height: 150px;
    overflow: hidden;
    justify-content: center;
    align-content: center;
  }
  .image img {
    width: 100%;
  }
`;

export const Info = styled.div`
  width: 84%;
  background: var(--blanco);
  border-radius: var(--border-radius);
  margin-bottom: 2%;
  margin-left: 1%;
  padding: var(--padding);

  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .header h2 {
    font-size: var(--titulo);
  }
  .header a {
    text-decoration: none;
    color: var(--gris-med);
  }
  ul li {
    width: 30%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--texto);
  }
`;

export const DataDiv = styled.div`
  justify-content: space-between;

  .data {
    width: 100%;
    align-content: baseline;
    margin: 2% 0;
    min-height: 250px;
  }
  .data ul:hover {
    background: #fafafa;
  }
  ul {
    width: 100%;
    justify-content: space-between;
  }
  & > ul li {
    color: var(--gris-dark);
  }
  li {
    list-style: none;
    font-size: var(--titulo);
    color: var(--gris-med);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  ul li:nth-child(1),
  ul li:nth-child(2) {
    width: 18%;
  }
  ul li {
    width: 10%;
  }
  ul li:nth-child(6),
  ul li:nth-child(7) {
    width: 7%;
    text-align: center;
    cursor: pointer;
  }
  button {
    background: var(--azul-claro);
    color: var(--blanco);
    font-size: var(--titulo);
    border: none;
    padding: 3px;
    border-radius: var(--border-radius-med);
    transition: 0.5s all;
  }
  button:hover {
    background: var(--azul-dark);
  }
`;
