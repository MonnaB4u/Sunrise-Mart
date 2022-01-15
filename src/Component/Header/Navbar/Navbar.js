import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className='ml-auto'>
                <Link className="mx-2 textcolor h6 font-bold" to="/">  Register <small className="border-l-2 border-sky-700 mx-2"></small></Link>
                <Link className="mr-2 textcolor h6 font-bold" to="/shop">Help <small className="border-l-2 border-sky-700 mx-2"></small></Link>
                <Link className="mr-3 textcolor h6 font-bold" to="/review">Feedback <small className="border-l-2 border-sky-700 mx-2"></small></Link>
                <Link className="mr-3 textcolor h6 font-bold" to="/login">Login </Link>
            </nav>
        </div>
    );
};

export default Navbar;
