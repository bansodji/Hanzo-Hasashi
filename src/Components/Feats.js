import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HeadingCombo } from './SmallComp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MUI from "../Images/feats/mui.jpg";
import FeatsData from '../Data/FeatsData';

const Feats = () => {
    return (
        <section className='py-5 bg-3'>
            <Container fluid className='f-container fff'>
                <Col lg="6"><HeadingCombo smallHeading="My Feats" bigHeading="Have a look at my greatest feats" /></Col>
                <div className='my-5'></div>
                <FeatsSlider />
            </Container>
        </section >
    );
}

const FeatsSlider = () => {
    return (
        <div class="owl-carousel owl-theme fff">
            {FeatsData.map( (data) => (
                <div data-aos="fade-right" class="item fff p-4 border-wide" style={{ background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${data.image})`, backgroundPosition: "center", backgroundSize: "cover", height: "34rem", borderRadius: "80px 0 80px 0" }}>
                    <Row className=''>
                        <Col lg="6">
                            <div data-aos="fade-left" className='bg-2a px-3 py-5' style={{borderRadius: "80px 0 80px 0"}}>
                                <h5 data-aos="fade-up" className='heading'>{data.name}</h5>
                                <p data-aos="fade-up" className='font-13 space-1'>{data.desc}</p>
                                <a data-aos="fade-up" href="#" className='f-color-1 zoom-1 font-700'>Read more
                                    <ArrowForwardIcon className='fff f-color-1 fs-5 ms-2 redirect-arrow' />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    );
}

export default Feats;