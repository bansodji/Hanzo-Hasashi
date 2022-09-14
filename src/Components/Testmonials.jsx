import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HeadingCombo } from './SmallComp';
import TestmonialData from '../Data/TestmonialData';

const Testmonials = () => {
    return (
        <section className='py-5 bg-2'>
            <Container fluid className='f-container fff'>
                <Col><HeadingCombo smallHeading="Testmonial" bigHeading="What people say about me" /></Col>
                <div className='my-5'></div>
                <TestmonialSlider />
            </Container>
        </section>
    );
}

const TestmonialSlider = () => {
    return (
        <div class="owl-carousel owl-theme fff">
            {TestmonialData.map((data)=>(
                <div class="item fff">
                    <div className='p-4' data-aos="fade-up">
                        <Row className='shadow-box rounded-20 size-100'>
                            <Col lg="6" md="6" sm="6" className='size-100 p-4'>
                                <div data-aos="fade-right" className='bg-4 rounded-30 size-100 d-flex justify-content-center overflow-hidden'>
                                    <img src={data.image} style={{ height: "15rem", width: "auto" }} alt="" />
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="6">
                                <div data-aos="fade-left" className='position-relative p-4'>
                                    <h3 className='fff-50 heading font-700 mb-4'>{data.name}</h3>
                                    <h5 className='lh-lg'>{data.desc}</h5>
                                    <i class="fas fa-quote-right fs-2 position-absolute" style={{ right: '10px', bottom: "10px" }}></i>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Testmonials;