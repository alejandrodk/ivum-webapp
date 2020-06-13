import styled from 'styled-components';

const Div = styled.div`
    justify-content: center;
    align-items: center;

    form {
        justify-content: center;
        align-content: center;
        width: 350px;
        background: var(--blanco);
        padding: var(--padding);
        border-radius: var(--border-radius);
        min-height: 300px;
    }
    label {
        text-align: left;
        width: 100%;
        color: var(--gris-med);
        font-size: var(--texto);
        margin-top: 5%;
    }
    input {
        width: 100%;
        border: solid 2px white;
        box-shadow: var(--shadow);
        border-radius: var(--border-radius-med);
        padding: 2px;
        color: var(--gris-med);
        font-size: var(--texto);
    }
    button {
        width: 50%;
        height: 20px;
        margin-top: 10%;
    }
    img {
	margin: 2% 40%;
	width: 150px;
    }
`;

export default Div;