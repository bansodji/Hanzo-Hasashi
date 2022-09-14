import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Goku from "../Images/goku.png";
import { RedirectBtn2 } from './SmallComp';

const Contact = () => {
    return (
        <section className='bg-3 py-5 fff overflow-hidden'>
            <Container fluid className='f-container'>
                <Row className='g-5'>
                    <Col lg="6" md="6">
                        <div className='d-flex align-items-center'>
                            <div className=''>
                                <img src={Goku} className="circle-img-x2 bg-4 p-1" alt="" />
                            </div>
                            <div className='ms-4'>
                                <h2 className='heading font-700 mb-3'>Son Goku</h2>
                                <h5 className='fff-50'>Syian Warrior and Z-Fighter</h5>
                            </div>
                        </div>
                        <div className='mt-4 fff'>
                            <i class="fa fa-facebook-f mx-4 fs-3 zoom-2"></i>
                            <i class="fa fa-twitter mx-4 fs-3 zoom-2"></i>
                            <i class="fa fa-instagram mx-4 fs-3 zoom-2"></i>
                            <i class="fa fa-linkedin mx-4 fs-3 zoom-2"></i>
                            <i class="fa fa-github mx-4 fs-3 zoom-2"></i>
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <div>
                            <a href="" className='fff'>
                                <h1 className='heading display-5 font-700'>Get in touch
                                    <i class="fas fa-arrow-right ms-4 cursor-pionter"></i>
                                </h1>
                            </a>
                            <div className='row mt-5 gx-5'>
                                <Col lg="6">
                                    <h5 className='heading font-600 fff-50 mb-3'>Email me</h5>
                                    <h4 className='heading'></h4>
                                    <RedirectBtn2 name="kakaroto@syian.com" />
                                </Col>
                                <Col lg="6">
                                    <h5 className='heading font-600 fff-50 mb-3'>Call me</h5>
                                    <h4 className='heading'></h4>
                                    <RedirectBtn2 name="(414) 977-048" />
                                </Col>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;