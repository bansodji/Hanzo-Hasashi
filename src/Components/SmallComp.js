import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Col } from 'react-bootstrap';

const RedirectBtn = (props) => {
    return (
        <div data-aos="fade-up" className='d-flex align-items-center f-border-bottom-fff-50 position-absolute'>
            <a href="#" className='uppercase fff fs-5 heading'>{props.name}</a>
            <ArrowForwardIcon className='fff ms-2' />
        </div>
    );
}

const RedirectBtn2 = (props) => {
    return (
        <div data-aos="fade-up" className='d-flex align-items-center underline-fff-50-bold position-absolute'>
            <a href="#" className='font-600 fff fs-4 heading'>{props.name}</a>
            <ArrowForwardIcon className='fff ms-2 redirect-arrow' />
        </div>
    );
}

const HeadingCombo = (props) => {
    return (
        <div data-aos="fade-up">
            <h5 className='uppercase font-700'>
                <span className='f-color-1'>/</span>&nbsp;&nbsp;
                {props.smallHeading}
            </h5>
            <h1 className='mt-4 display-5 heading font-600'>{props.bigHeading}</h1>
        </div>
    );
}

export { RedirectBtn, RedirectBtn2, HeadingCombo };