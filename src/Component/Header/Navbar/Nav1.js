import React from 'react';
import Nav2 from './Nav2';
import Navbar from './Navbar';

const Nav1 = (props) => {
    const cart= props.cart
    return (
        <div>
            <Navbar></Navbar>
            <Nav2 cart={cart}></Nav2>
        </div>
    );
};

export default Nav1;
