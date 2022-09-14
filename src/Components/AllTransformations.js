import React from 'react';
import { Col, Row } from 'react-bootstrap';
import base from "../Images/transformations/base.png";
import ssj1 from "../Images/transformations/ssj1.png";
import ssj2 from "../Images/transformations/ssj2.png";
import ssj3 from "../Images/transformations/ssj3.png";
import ssjGod from "../Images/transformations/ssj-god.png";
import ssjBlue from "../Images/transformations/ssj-blue.png";
import UI from "../Images/transformations/ui.png";
import MUI from "../Images/transformations/mui.png";

const AllTransformations = () => {
    return (
        <div className='overflow-hidden'>
            <h5 class="heading uppercase mt-5 font-700 mb-5">My Transformations</h5>
            <Row className='g-5'>
                <BasicCol name="Base" image={base}/>
                <BasicCol name="Super Saiyan" image={ssj1}/>
                <BasicCol name="Super Saiyan 2" image={ssj2}/>
                <BasicCol name="Super Saiyan 3" image={ssj3}/>
                <BasicCol name="Super Saiyan God" image={ssjGod}/>
                <BasicCol name="Super Saiyan Blue" image={ssjBlue}/>
                <BasicCol name="Ultra Instinct" image={UI}/>
                <BasicCol name="Mastered Ultra Instinct" image={MUI}/>
            </Row>
        </div>
    );
}

const BasicCol = (props) => {
    return (
        <Col lg="3" md="3" sm="6">
            <div className='size-100 d-flex justify-content-center'>
                <div className='cursor-pointer'>
                    <img className='zoom-1 mb-4' src={props.image} style={{ height: "20rem" }} alt="" />
                    <h5 class="text-center fff-50 mt-4 font-700">{props.name}</h5>
                </div>
            </div>
        </Col>
    );
}


export default AllTransformations;