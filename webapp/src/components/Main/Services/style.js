import styled from 'styled-components';

export const Div = styled.div`
    justify-content: center;

    .boton{
  		color: white;
  		padding: 1% 2%;
  		border-radius: 10px;
  		margin: auto;
  		background: rgba(12,116,219,1);
  		background: -moz-linear-gradient(top, rgba(12,116,219,1) 0%, rgba(47,172,255,1) 77%, rgba(47,172,255,1) 100%);
  		background: -webkit-linear-gradient(top, rgba(12,116,219,1) 0%, rgba(47,172,255,1) 77%, rgba(47,172,255,1) 100%);
  		background: -o-linear-gradient(top, rgba(12,116,219,1) 0%, rgba(47,172,255,1) 77%, rgba(47,172,255,1) 100%);
  		background: linear-gradient(to bottom, rgba(12,116,219,1) 0%, rgba(47,172,255,1) 77%, rgba(47,172,255,1) 100%);
	}
	@media (max-width: 768px) {
		.boton {
			margin-top: 17%;
		}
	}
`