import React from 'react';
import SkillsData from '../Data/SkillsData';
import Logo from "../Images/logo.png";

const SmallImg = {
    width: "70px",
    height: "70px"
}

const Slider1 = () => {
    return (
        <>
            <div class="owl-carousel owl-theme fff">
                {SkillsData.map((data) => (
                    <div class="item">
                        <div data-aos="fade-right" className='bg-4 p-5 rounded-30'>
                            <img src={Logo} className="mb-4" style={SmallImg} alt="" data-aos="fade-up"/>
                            <h1 data-aos="fade-up" className='heading font-600 fff mb-4'>{data.name}</h1>
                            <div className='row g-5'>
                                <div data-aos="fade-up" className='col-lg-6 col-md-6 col-sm-6 small-underline-bottom-fff'>
                                    <h5 className='fff-50 lh-lg pb-5'>{data.desc}</h5>
                                </div>
                                <div data-aos="fade-up" className='col-lg-6 col-md-6 col-sm-6'>
                                    <div className='size-100 d-flex align-items-center justify-content-end'>
                                        <img style={{ height: "20rem", width: "auto" }} src={data.image} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Slider1;