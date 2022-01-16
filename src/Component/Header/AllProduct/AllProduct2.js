import React from 'react';
import Nav1 from '../Navbar/Nav1';
import Sidebar from '../Sidebar/Sidebar';
import Sidebar2 from '../Sidebar/Sidebar2';
import AllProduct from './AllProduct';

const AllProduct2 = () => {
    return (
        <div>
            <Nav1></Nav1>
            <div className="row">
                <div className="col-sm-2">
                    <Sidebar2></Sidebar2>
                </div>
                <div className="col-sm">
                    <AllProduct></AllProduct>
                </div>
            </div>

        </div>
    );
};

export default AllProduct2;
