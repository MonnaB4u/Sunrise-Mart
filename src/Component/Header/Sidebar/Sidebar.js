import React from 'react';
import PopularItems from '../PopularItems/PopularItems';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="row ">
            <div className="col-md-2 border sideHead sticky" style={{ minHeight: '100vh', minWidth: '250px' }}>
                <div className="mt-2">
                    <ul className="m-4">
                        <li className="my-2 ">Meat&Fish</li>
                        <li className="my-2 ">Cooking Essentials</li>
                        <li className="my-2 ">Sauces & Pickels</li>
                        <li className="my-2 ">Snakes & Instant Food</li>
                        <li className="mt-2 ">Dry Food</li>
                    </ul>

                </div>
            </div>
            <div className="col-md">
               <PopularItems></PopularItems>
            </div>

        </div>
    );
};

export default Sidebar;
