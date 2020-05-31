import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderComp from './Header';
import Intro from './Intro';
import ActionButton from './ActionButton';
import Services from './Services';
import Presentation from './Presentation';
import Contact from './Contact';
import ItemContact from './ItemContact';
import styles from './container.module.css';

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
            <Container fluid className={styles.mainPresentation}>
                <Container>
                    <Row>
                        <Col>
                            <Presentation />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className={styles.mainContact}>
                <Container>
                    <Row>
                        <Col>
                            <Contact>
                                <ItemContact 
                                link='tel: +584168047978'
                                alt='Whatsapp'
                                icon='fab fa-whatsapp'
                                title='0416-804-7978'
                                />
                                <ItemContact 
                                link='https://instagram.com/_u/ivum.ecografias/'
                                alt='Instagram'
                                icon='fab fa-instagram'
                                title='ivum.ecografias'
                                />
                                <ItemContact 
                                link='https://fb.me/ivum.ecografias'
                                alt='Facebook'
                                icon='fab fa-facebook'
                                title='ivum.ecografias'
                                />
                                <ItemContact 
                                link='mailto: contacto@ivum.org'
                                alt='Email'
                                icon='fas fa-at'
                                title='contacto@ivum.org'
                                />
                            </Contact>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className={styles.mainFooter}>
                <Container>
                    <Row>
                        <Col>
                        
                        </Col>
                    </Row>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Main;