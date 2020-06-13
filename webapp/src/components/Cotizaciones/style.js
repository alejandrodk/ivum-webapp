import styled from 'styled-components';

const CurrentsDiv = styled.div`
    width: 100%;
    min-height: 150px;
    padding: var(--padding);
    background: var(--blanco);
    font-size: var(--texto);
    border-radius: var(--border-radius);

    h3 {
        font-size: var(--titulo);
        color: var(--gris-dark);
    }
    .currentDetail {
        width: 100%;
        text-align: center;
        color: var(--gris-med);
        margin-top: 5%;
        border-radius: var(--border-radius-med);
        padding: 2px;
        box-shadow: var(--shadow);
    }
`;

export default CurrentsDiv