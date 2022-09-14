import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { RedirectBtn } from './SmallComp';
import Goku from "../Images/goku.png";
import ScrollDownCircle from './ScrollDownCircle';

const Hero = () => {
    return (
        <div className='hero pt-5' id='hero'>
            <Container fluid className='f-container'>
                <Row className='f-mt-10'>
                    <Col lg="5" md="6">
                        <div className='fff' data-aos="fade-up">
                            <h1 className='display-5 heading font-700 f-border-top-30'> “Power comes in response to a need, not a desire.”</h1>
                            <Col lg="7">
                                <p>Hi, I am Son Goku aka Kakarot from Universe 7. I am a Saiyan raised on Earth.  I love to fight the strongest warriors I can find.</p>
                            </Col>
                        </div>

                        <div className='mt-5 pt-4 fff d-none d-lg-block' data-aos="fade-up">
                            <h5 className='uppercase heading font-700 mb-4'>Follow Me</h5>

                            <i class="fa fa-facebook-f me-4 fs-3 zoom-2"></i>
                            <i class="fa fa-twitter me-4 fs-3 zoom-2"></i>
                            <i class="fa fa-instagram me-4 fs-3 zoom-2"></i>
                            <i class="fa fa-linkedin me-4 fs-3 zoom-2"></i>
                            <i class="fa fa-github me-4 fs-3 zoom-2"></i>
                        </div>

                        <div className='d-block d-lg-none' data-aos="fade-up">
                            <img src={Goku} style={{ height: "50vh" }} alt="" />
                        </div>

                        <ScrollDownCircle to="#About" />

                    </Col>
                    <Col lg="4" md="0" className='d-md-none d-lg-block'></Col>
                    <Col lg="3" md="6">
                        <div data-aos="fade-up" style={{ borderBottom: "1px solid" }} className='border-muted mt-4 pb-5'>
                            <div className='pb-5'>
                                <h5 className='uppercase heading font-700 fff mb-3'>About Me</h5>
                                <p className='mb-5'>Hi, I am Son Goku aka Kakarot from Universe 7. I am a Saiyan raised on Earth.  I love to fight the strongest warriors I can find.</p>
                                <RedirectBtn name="Learn More" />
                            </div>
                        </div>

                        <div data-aos="fade-up" style={{ borderBottom: "1px solid" }} className='border-muted mt-5 pb-5'>
                            <div className='pb-5'>
                                <h5 className='uppercase heading font-700 fff mb-3'>My Work</h5>
                                <p className='mb-5'>I am Z-Fighter who Guards the universe from the evil who wants to harm it. And I am in a way to become an Angel.</p>
                                <RedirectBtn name="Learn More" />
                            </div>
                        </div>

                        <div data-aos="fade-up" className='mt-5 fff d-block d-lg-none mb-5'>
                            <h5 className='uppercase heading font-700 mb-4'>Follow Me</h5>

                            <i class="fa fa-facebook-f me-4 fs-3 zoom-2"></i>
                            <i class="fa fa-twitter me-4 fs-3 zoom-2"></i>
                            <i class="fa fa-instagram me-4 fs-3 zoom-2"></i>
                            <i class="fa fa-linkedin me-4 fs-3 zoom-2"></i>
                            <i class="fa fa-github me-4 fs-3 zoom-2"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;