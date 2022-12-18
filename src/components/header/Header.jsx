import React from 'react';
import Intro from "../introduction/Intro";
import Navbar from "../navbar/Navbar";

const Header = () => {
    return (
        <header>
            <Intro />
            <Navbar />
        </header>
    );
};

export default Header;