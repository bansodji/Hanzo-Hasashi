import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TransformationsData from '../Data/TransformationsData';
import base from "../Images/transformations/base.png";

const bg = {

}

const AllTransformations2 = () => {
    return (
        <section>

            <Row>
                <Col lg="5">
                    <div>
                        <h5 data-aos="fade-up" className="heading uppercase mt-5 font-700 mb-4">My Transformations</h5>
                        <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque mollitia.</p>
                        <p data-aos="fade-up">In soluta atque placeat nulla distinctio natus. Quidem quas, ducimus et placeat cum aspernatur, cupiditate nemo quaerat sint quos est cumque quisquam aperiam quasi iure consequatur deleniti eveniet. Nulla aliquam nemo recusandae vero nobis molestiae quos sint aut consectetur cum corpori.</p>
                    </div>
                    {/* </div> */}
                </Col>
                <Col lg="7">
                    <TransformationSlider />
                </Col>
            </Row>

        </section>
    );
}

const TransformationSlider = () => {
    return (
        <div className="owl-carousel owl-theme fff">
            {TransformationsData.map((data) => (
                <div className="item">
                    <div className="t-box fff d-flex justify-content-center">
                        <div data-aos="fade-left" className='text-container p-4' style={{
                            backgroundImage: `url(${data.image})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}>
                            <div data-aos="fade-right" className='bg-1b p-4 rounded-20'>
                                <h5 data-aos="fade-up" className='heading font-700 text-center'>{data.name}</h5>
                                <p data-aos="fade-up" className='text-center'>{data.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AllTransformations2;