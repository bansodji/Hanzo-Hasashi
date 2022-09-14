import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import Header from './Layouts/Header';
import Home from './Pages/Home';
import "./App.scss";
import Footer from './Layouts/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Hanzo-Hasashi/" element={<Home />} />
      </Routes> */}
      <footer className=' bg-3 pt-5 pb-4 fff overflow-hidden'>
        <Footer />
      </footer>
    </>
  );
}

export default App;