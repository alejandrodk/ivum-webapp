import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import LoginForm from './components/LoginForm';

const Wrapper = styled.div`
    background: var(--gris-light);
    width: 100%;
    height: 100vh;
    padding: 2% 5%;
    justify-content: center;
    align-items: center;
`;

const Login = () => {

    return (
        <Wrapper className="wrap">
            <Container>
                <Row>
                    <Col>
                       <LoginForm />
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Login;