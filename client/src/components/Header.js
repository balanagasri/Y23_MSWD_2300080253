import React from 'react';
import logo from '../logo.svg'; 
const Header = () => {
    return (
        <div>
            <img src={logo} alt="kl_logo" style={{ width: '50px', height: '50px' }} />
            <h1>KL University</h1>
        </div>
    );
};

export default Header;
