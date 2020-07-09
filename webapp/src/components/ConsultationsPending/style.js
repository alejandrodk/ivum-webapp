import styled from 'styled-components';

const Div = styled.div`
    margin: 2% 0;
    
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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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