import styled from 'styled-components';

export const Item = styled.div`
	background: white;
	position: relative;
	top: -80px;
	border-radius: 12px;
	text-align: center;
	padding: 1%;
	width: 20%;
	margin: 1%;
	img {
		padding: 7%;
		width: 90%;
		transition : 03s all;
	}
	h1 {
		color: var(--azul);
		font-weight: 300;
		width: 85%;
		font-size: 1.5rem;
		margin: auto;
	}
	@keyframes flotar {
    	0% { top: -10px; }
    	25% { top: 10px; }
    	75% { top: -10px; }
    	100% { top: 10px; }
  	}
	img:hover {
		position: relative;
		animation: flotar 3s infinite;
		animation-direction: alternate;
	}

	@media (max-width: 768px) {
		top: auto;
		width: 43%;
		
		img {
			height: 70%;
		}
		h1{
		  text-align: center;
		  font-size: 1.2rem;
		}
	}
`