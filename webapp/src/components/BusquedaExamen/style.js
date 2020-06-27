import styled from 'styled-components';

const BusquedaDiv = styled.div`
    background: var(--blanco);
    width: 100%;
    min-height: 150px;
    padding: var(--padding);
    border-radius: var(--border-radius);
    margin-bottom: 2%;
    
    form ~ div{
        width: 100%;
    }
    .titles{
        font-size: var(--texto);
        color: var(--gris-med);
        margin-top: 3%;
    }
    .data {
        width: 100%;
        border: solid 2px var(--azul-claro);
        border-radius: var(--border-radius);
        padding: 5px;
        margin : 1% 0;
    }
    .data ul, ul {
        width: 100%;
    }
    ul li{
        list-style: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    ul li:nth-child(1){
        width: 40%;
    }
    ul li:nth-child(2){
        width: 20%;
    }
    ul li:nth-child(3){
        width: 40%;
    }
`;

export default BusquedaDiv;