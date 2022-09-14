import React from 'react';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Feats from '../Components/Feats';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import Testmonials from '../Components/Testmonials';

const Home = () => {
    return ( 
        <>
            <Hero/>
            <About/>
            <Skills/>
            <Feats/>
            <Testmonials/>
        </>
     );
}
 
export default Home;