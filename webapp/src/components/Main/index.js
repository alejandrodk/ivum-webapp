import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderComp from '../Header';
import Intro from './Intro';
import ActionButton from './ActionButton';
import Services from './Services';
import styles from './container.module.css';
import { Link } from 'react-router-dom';

const Main = () => {

    return (
        <React.Fragment>
            <Container fluid className={styles.mainHeader}>
                <Container>
                    <Row>
                        <Col>
                            <HeaderComp />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Intro>
                                <ActionButton 
                                color='#99ff33'
                                link='tel: +584168047978'
                                icon={"fab fa-whatsapp"}
                                alt='Hacer una cita por whatsapp'
                                desc='Hacer una cita'
                                />
                                <ActionButton 
                                color='#3374ff'
                                link='http://instagram.com/_u/ivum.ecografias/'
                                icon={"fab fa-instagram"}
                                alt='Ir al perfil de instagram'
                                desc='ivum.ecografias'
                                />
                            </Intro>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className={styles.mainServices}>
                <Container>
                    <Row>
                        <Col>
                            <Services>
                                <Link to='/' className="boton">
                                    <div>
                                        <h3>Más Información</h3>
                                    </div>
                                </Link>
                            </Services>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Main;