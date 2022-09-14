import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ScrollDownCircle = (props) => {
    return (
        <div className='scroll-down-circle-wrapper my-5'>
            <a href={props.to}>
                <div className='scroll-down-circle fff'>
                    <i class="fas fa-chevron-down down-arrow"></i>
                </div>
            </a>
        </div>
    );
}

export default ScrollDownCircle;