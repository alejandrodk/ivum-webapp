import styled from 'styled-components';

export const Div = styled.div`
    background: var(--blanco);
    width: 100%;
    min-height: 150px;
    padding: var(--padding);
    border-radius: var(--border-radius);
    margin-bottom: 2%;
`

export const DataDiv = styled.div`
    justify-content: space-between;

    .data {
        width: 100%;
        align-content: baseline;
        margin: 2% 0;
        min-height: 250px;
    }
    .data ul:hover {
        background : #fafafa;
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
    ul li {
        width: 10%;
    }
    ul li:nth-child(1){
        width: 3%;
    }
    ul li:nth-child(5){
        width: 23%;
    }
    ul li:nth-child(7) {
        text-align: center;
        cursor: pointer;
    }
    button {
        background : var(--azul-claro);
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
`
