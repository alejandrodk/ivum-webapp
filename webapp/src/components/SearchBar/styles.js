import styled from 'styled-components';

const Search = styled.form`
    align-content: baseline;
    width: 100%;
    justify-content: space-between;

    label {
        font-size: var(--titulo);
        color: var(--gris-med);
        width: 100%;
        height: 30px;
    }
    input {
        width: 85%;
        border: none;
        background: var(--gris-light);
        border-radius: var(--border-radius);
        padding: 5px;
    }
    button {
        background: var(--gradient-verde);
        color: var(--blanco);
        border-radius: var(--border-radius);
        font-weight: 400;
        width: 10%;
        border: none;
    }


`;

export default Search;