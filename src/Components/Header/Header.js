import React from 'react';

import './Header.css'
const Header = () => {
    return (
        <div className="header-container">
            <img className="logo" src="/img/Exo-logo-v-neck_design2.jpg" alt="" />
            <h1>EXO-The Shining Star</h1>
            <p>We are one. Let's love</p>
            <h1>Total Donation Budget: 150 bilion <small>(over the year)</small></h1>
        </div>
    );
};

export default Header;