import React from 'react';
import { DivIntro, DivButtons } from './style';

const Intro = (props) => {
    return (
        <DivIntro>
            <h1>Instituto Venezolano de Ultrasonido en Medicina</h1>
            <h2>Más de 40 años de experiencia en ecografías.</h2>
            <DivButtons>
                { props.children }
            </DivButtons>
        </DivIntro>
    )
}

export default Intro;