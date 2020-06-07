import styled from 'styled-components';

const BusquedaDiv = styled.div`
    background: var(--blanco);
    width: 100%;
    min-height: 150px;
    padding: var(--padding);
    border-radius: var(--border-radius);
    
    .data {
        width: 100%;
        border: solid 2px var(--azul-claro);
        border-radius: var(--border-radius);
        padding: 5px;
        margin : 2% 0;
    }
    ul {
        width: 100%;
    }
    ul li{
        list-style: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .data ul:nth-child(1){
        font-size: var(--texto);
        color: var(--gris-med);
    }
    ul li:nth-child(1){
        width: 30%;
    }
    ul li:nth-child(2){
        width: 20%;
    }
    ul li:nth-child(3){
        width: 40%;
    }
`;

export default BusquedaDiv;