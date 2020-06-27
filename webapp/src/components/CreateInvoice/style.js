import styled from 'styled-components';

const Form = styled.form`
    justify-content: space-between;
    align-items: center;
    
    &.disable {
        height: 0;
        overflow: hidden;
    }

    input, select, span {
        width: 100%;
        border-radius: var(--border-radius-med);
        border: solid 1px var(--gris-normal);
        padding: 3px;
        margin: 0.5% 0;
        color: var(--gris-med)
    }
    .payment_info,
    .invoice_info {
        width: 100%;
        justify-content: space-between;
        margin-bottom: 3%;
    }
    .invoice_info {
        margin-bottom: 0;
    }
    .payment_info input,
    .invoice_info input,
    .invoice_info select {
        width: 49%;
    }
    input[name='paciente_id']{
        width: 93%;
    }
    .add_pacient, .consult button{
        background: none;
        border: none;
        font-size: 20px;
        color: var(--azul);
    }
    .consult button i.delete {
        color: red
    }
    .add_pacient.false {
        color: red;
    }
    .consult {
        width: 100%;
        justify-content: space-between;
    }
    .consult > select {
        width: 70%; 
    }
    .consult span {
        width : 20%;
        border: solid 1px var(--gris-normal);
        border-radius : var(--border-radius-med);
        text-align: center;
    }
    .consult span::before {
        content : '$'
    }
    input[name='observacion'] {
        margin-bottom : 3%;
    }
    .invoice_info input[type=text]{
        background: #f9f9f9;
    }
    & > button:nth-last-child(1){
        padding: 1%;
        width: 15%;
        margin-top: 2%;
    }
    p {
	    color: var(--gris-med);
	    font-size: var(--titulo);
    }
`;

export default Form