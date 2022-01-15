import React from 'react';
import facebook from '../../Data/Image/facebook-logo-transparent-background-8.png'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <div className="container">
                <div className="row bg-neutral-200 my-3">
                    <div className="flex space-x-9 textcolor font-bold p-3" >
                        <small className="mx-5">Our Outlets</small>
                        <small className="mx-5">Terms & Conditions</small>
                        <small className="mx-5">About Us</small>
                        <small className="mx-5">Help</small>
                        <small className="mx-5">Carrer</small>
                        <small className="mx-5">Sitemap</small>
                    </div>
                    <p className="h6 ml-5 mx-5 text-slate-500">POPULAR SEARCHES</p>
                    <div className="d-flex flex-wrap px-5 ml-3 mb-2 text-slate-500">
                        <small>Our Own Products  <span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small>Cooking Essentials  <span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small>Our Own Products  <span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small>Rice  <span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small>Oil <span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small>Flour <span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small> Vegetable<span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small> Fruit<span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small> Fish<span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small> Meat<span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small> Chocolate & Candies<span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small> Baby Food &care <span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small>Bread, Biscuits & Cakes <span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small>Milk & Dairy Products <span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small>Watches <span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small>Mens Shoes <span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small> Accessories<span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small>Home Appliances <span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small>Spotrs <span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small> Personal Care <span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small>Stationery <span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small> Gist & Toys<span className="border-r-2 mx-2 border-sky-700" /></small>
                        <small>Sauces & Pickels</small>
                    </div>
                </div>
                <div className="flex">
                    <small className="mx-5 h6 text-current text-slate-500">© SuperShop 2022 All Rights Reserved</small>
                    <div className="flex ml-auto">
                        <p className="h5 textcolor font-bold mt-2">Follow US:</p>
                        <FaFacebook size='40' className="mx-1 mb-1" />
                        <FaInstagram size='40' className="mx-1 mb-1" />
                        <FaYoutube size='40' className="mx-1 mb-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
