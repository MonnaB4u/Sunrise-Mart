import React, { useState } from 'react';
import logo from '../../Data//Image/shwapno-logo.jpg'
import './Navbar.css'
import { FaLocationArrow, FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import logos from '../../Data/Image/logo.jpeg'
import { useNavigate } from 'react-router-dom';
import menupng from '../../Data/Image/menu.png'
import './Navbar.css'

const Nav2 = (props) => {
    // const cart = props.cart
    // console.log(cart)
    // const carts=0
    // if (cart.length === 0) {
    //     carts=null
    // }else{
    //     carts=0+1
    // }
    const [value, setValue] = useState(0)
    // const [navbarOpen, setNavbarOpen,] = useState(false)

    // const handleToggle = () => {
    //     setNavbarOpen(!navbarOpen)
    // }
    const navig = useNavigate()
    return (
        <div className="">
            <ul class="flex bg-danger">
                <li class="d-flex flex-1 mr-2">
                    {/* /////////////////// */}
                    {/* <img className="img-fluid w-10 bg-danger" src={logo} alt="" class="img-fluid ml-4" /> */}
                    <div className="ml-4 mt-2">
                        <div className="menudiv"></div>
                        <div className="menudiv"></div>
                        <div className="menudiv"></div>
                    </div>
                    <a onClick={() => navig('/')} class="navbar-brand ml-2" href="#"> <span class="fw-bold fs-2 text-yellow-300">S</span><span class=" fw-bold text-green-400 ">unrise mart</span></a>
                    {/* <FaLocationArrow className="font-bold mt-4 ml-4" />
                    <p className="h3 mt-3 ml-4">  Dhaka</p> */}

                    <div class=" ml-4 mt-2">
                        <div className="d-flex ">

                           <FaLocationArrow className="font-bold w-25 mt-2 ml-4" />
                        <select class="form-select" aria-label="Default select example">

                            <option selected> Select Your Location</option>
                            <option value="Mirpur">Mirpur</option>
                            <option value="Dhanmondi">Dhanmondi</option>
                            <option value="Gulshan">Gulshan</option>
                        </select>
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
