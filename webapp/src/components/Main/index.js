import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderComp from '../Header';
import styles from './container.module.css';

const Main = () => {

    return (
        <React.Fragment>
            <Container fluid className={styles.mainHeader}>
                <HeaderComp />
            </Container>
        </React.Fragment>
    )
}

export default Main;