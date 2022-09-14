import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../Images/logo.png";

const Header = () => {
    return (
        <>
        <div style={{height: "1rem"}} className="bg-2"></div>
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid f-container">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img src={Logo} alt="Bootstrap" width="40" height="40" />
                        <span className='fs-4 ms-2 fff uppercase brand-font font-700'>kakarot</span>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto font-700 fs-5">
                            <li className="nav-item ms-4 space-1">
                                <Link className="nav-link heading fff" exact to="/">Home</Link>
                            </li>
                            <li className="nav-item ms-4 space-1">
                                <Link className="nav-link heading fff" to="/about">About</Link>
                            </li>
                            <li className="nav-item ms-4 space-1">
                                <Link className="nav-link heading fff" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item ms-4 space-1">
                                <Link className="nav-link heading fff" to="/portfolio">Portfolio</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    );
}

export default Header;