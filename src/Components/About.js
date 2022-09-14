import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HeadingCombo, RedirectBtn2 } from './SmallComp';
import Master1 from "../Images/masters/master-roshi.webp";
import Master2 from "../Images/masters/korin.png";
import Master3 from "../Images/masters/king-kai.webp";
import Master4 from "../Images/masters/wish.png";

const About = () => {
    return (
        <section id='About' className='bg-3 py-5'>
            <Container fluid className='f-container my-5 fff overflow-hidden'>
                <Row className='g-5 pb-5 border-bottom border-secondary'>
                    <Col lg="6">
                        <div className='pb-5'>
                            <HeadingCombo smallHeading="About Me" bigHeading="Hi, I am Son Goku aka Kakarot from Universe 7." />
                            <p data-aos="fade-up" className='mb-5'>Son Goku (孫そん悟空ごくう Son Gokū), born Kakarot (カカロット Kakarotto), is a Saiyan raised on Earth and the overall main protagonist of the Dragon Ball series. Originally was sent to Earth as an infant, Kakarot would be adopted by Grandpa Gohan who named him Son Goku. </p>
                            <RedirectBtn2 name="More about me" />
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className='size-100 d-flex align-items-center'>
                            <div>
                                <Row>
                                    <Col lg="6" md="6" sm="6">
                                        <div className='d-flex align-items-center' data-aos="fade-up">
                                            <h1 className='display-1 heading font-900'>12</h1>
                                            <h5 className='heading ms-3 lh-base'>Years as a Z-Fighter</h5>
                                        </div>
                                    </Col>
                                    <Col lg="6" md="6" sm="6">
                                        <div className='d-flex align-items-center' data-aos="fade-up">
                                            <h1 className='display-1 heading font-900'>1st</h1>
                                            <h5 className='heading ms-3 lh-base'>in Tournament of power</h5>
                                        </div>
                                    </Col>
                                </Row>
                                <p className='mt-4' data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam iusto atque sequi numquam quidem nulla nisi asperiores voluptas aut maxime at optio tempore, culpa, nobis error repudiandae natus, doloremque perspiciatis?</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <h5 className='heading uppercase mt-5 font-700 mb-5'>Trained Under</h5>
                    <Masters image={Master1} name="Master Roshi" />
                    <Masters image={Master2} name="Korin" />
                    <Masters image={Master3} name="Kaing Kai" />
                    <Masters image={Master4} name="Wish" />
                </Row>
            </Container>
        </section>
    );
}

const Masters = (props) => {
    return (
        <div className='col-6 col-lg-3 col-ms-3 col-sm-6'>
            <div className='size-100 d-flex justify-content-center'>
                <div className='cursor-pointer' data-aos="fade-up">
                    <img style={{ height: "10rem", width: "auto" }} src={props.image} className="img-fluid zoom-1" alt="" />
                    <center><p className='text-center mt-4 font-700'>{props.name}</p></center>
                </div>
            </div>
        </div>
    )
}

export default About;