import styled from 'styled-components';

const Div = styled.div`
    position: relative;
    background: var(--blanco);
    margin-top: 2%;
	width: 100%;
	min-height: 150px;
	padding: var(--padding);
    border-radius: var(--border-radius);
    
    &::after {
	content: '';
	    width: 30px;
	    height: 20px;
	    position: absolute;
	    right: 2%;
	    background: #26e8ba;
	    top: 5%;
	    border-radius: var(--border-radius-med);
    }
    h2 {
	    font-size: var(--verde);
	    border-bottom: solid 2px var(--azul-claro);
	    color: var(--gris-med);
	    font-weight: 600;
    }
    div {
	    margin: 2% 0;
    }
    ul {
	    justify-content: space-between;
	    width: 100%;
    }
    li {
        list-style: none;
        font-size: var(--texto);
        color: var(--gris-med);
        margin-bottom: 1%;
        width: 25%;
        text-align: center;
        padding: 0 2.5%;
    }
    ul li:nth-child(1){
        border-right: 2px solid gray;
        text-align: left;
    }
    ul li:nth-child(2){
        border-right: 2px solid gray;
    }
    ul li:nth-child(4){
        border-left: 2px solid gray;
        text-align: right;
    }
`;

export default Div;