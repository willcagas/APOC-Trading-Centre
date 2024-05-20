import React from 'react';
import { Link } from 'react-router-dom';

import logo from './../assets/images/logo.png';

import './../assets/styles/Navbar.css';

const Header = () => {
    return (
        <header>
            <img className="site-logo" height={55} src={logo} alt=''/>
            
            <nav>
                <Link to="/" >Home</Link>
                <Link to="/post-listing">Post</Link>
            </nav>
        </header>
    );
};

export default Header;
