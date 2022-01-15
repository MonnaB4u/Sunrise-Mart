import React, { useState } from 'react';
import logo from '../../Data//Image/shwapno-logo.jpg'
import './Navbar.css'
import { FaLocationArrow, FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import logos from '../../Data/Image/logo.jpeg'

const Nav2 = () => {
    const [value, setValue] = useState(0)
    const [navbarOpen, setNavbarOpen,] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    return (
        <div className="">
            <ul class="flex bg-danger">
                <li class="d-flex flex-1 mr-2">
                    {/* /////////////////// */}
                    {/* <img className="img-fluid w-10 bg-danger" src={logo} alt="" class="img-fluid ml-4" /> */}
                     <a class="navbar-brand ml-2" href="#"> <span class="fw-bold fs-2 text-yellow-300">S</span><span class=" fw-bold text-green-400 ">unrise mart</span></a>
                    {/* <FaLocationArrow className="font-bold mt-4 ml-4" />
                    <p className="h3 mt-3 ml-4">  Dhaka</p> */}

                    <div class="dropdown ml-4 mt-2">
                        <div className="d-flex dropbtn">
                            <FaLocationArrow className="font-bold mt-2 ml-4" />
                            <button class="dropbtn"> Set Location</button>
                        </div>

                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>

                    {/* //////// */}

                </li>

                <li class="flex-1 mr-2 d-flex">
                    <input type="search" placeholder="Search Your Item" className="mt-3 text-center w-100 h-50 border-radi" />
                    <button className="mt-3 text-center w-20 bg-slate-400 border h-50 border-radi2">Search</button>
                </li>

                <li class="flex-1 d-flex justify-content-center ml-4">
                    <FaShoppingCart className=" h1 mt-2"></FaShoppingCart>
                    <a class="h5 font-bold text-white mx-2 mt-3" href="#"> Orders</a>
                    <i className="text-white mt-1"> {value}</i>
                    <small className="border-l-2 border-sky-700 mx-2"></small>
                    <FaUserCircle className="mt-2 h1 "></FaUserCircle>
                </li>
            </ul>
        </div>
    );
};

export default Nav2;
