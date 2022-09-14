import React from 'react';
import { Col, Container } from 'react-bootstrap';
import AllTransformations2 from './AllTransformations2';
import Slider1 from './Slider1';
import { HeadingCombo } from './SmallComp';

const Skills = () => {
    return (
        <section className='py-5 bg-2 fff'>
            <Container fluid className='f-container'>
                <Col lg="6">
                    <HeadingCombo smallHeading="My Skills" bigHeading="My extensive list of skills" /></Col>
                <div className='my-5'></div>
                <Slider1 />
                <div className='border-bottom border-secondary py-4'></div>
                <div className='my-5'></div>
                <AllTransformations2 />
            </Container>
        </section>
    );
}

export default Skills;