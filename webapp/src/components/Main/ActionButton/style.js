import styled from 'styled-components';

export const Div = styled.div`
    a {
        align-items: center;
    }
    p {
    	color: var(--gris);
    	margin-left: 10px;
    }
    i {
        font-size : 30px;
        color : ${ (props) => props.color }
    }
    align-items: center;
    transition: 0.3s all;
    a:hover {
        outline-width: 0;
    }
    &:hover {
	transform: scale(1.1);
	background: white;
	/* border: solid 1px gray; */
	border-radius: 5px;
	width: 50%;
	justify-content: center;
	height: 100%;
	-webkit-box-shadow: 0px 0px 12px -6px rgb(0, 0, 0);
	-moz-box-shadow: 0px 0px 12px -6px rgba(0,0,0,0.58);
	box-shadow: 0px 0px 18px -6px rgb(0, 0, 0);
}

@media (max-width: 768px) {
   width: 100%;
   background: white;
   justify-content: center;
   margin: 5% 10%;
   padding: 1%;
   border-radius: 5px;
}
`