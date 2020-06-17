import styled from 'styled-components';

const AppointmentForm = styled.form`
    justify-content: space-between;
    align-items: center;
    
    &.disable {
        height: 0;
        overflow: hidden;
    }

    input, select {
        width: 100%;
        border-radius: var(--border-radius-med);
        border: solid 1px var(--gris-normal);
        padding: 3px;
        margin: 0.5% 0;
        color: var(--gris-med)
    }
    input:nth-child(5),
    input:nth-child(6) {
        width: 48%;
    }
    button {
        padding: 1%;
        width: 15%;
        margin-top: 2%;
    }
    p {
	    color: var(--gris-med);
	    font-size: var(--titulo);
    }
`;

export default AppointmentForm