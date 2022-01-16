import React from 'react';
import PopularItems from '../PopularItems/PopularItems';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="row ">
            <div className="col-md-2 border sideHead sticky" style={{ }}>
                <div className="mt-2 ">
                    <ul className="m-4">
                        <li className="my-2 my-3 border-bottom border-top p-2 box2">Meat&Fish</li>
                        <li className="my-2 my-3 border-bottom border-top  p-2 box2">Cooking Essentials</li>
                        <li className="my-2 my-3 border-bottom border-top  p-2 box2">Sauces & Pickels</li>
                        <li className="my-2 my-3 border-bottom border-top  p-2 box2">Snakes & Instant Food</li>
                        <li className="mt-2 my-3 border-bottom border-top  p-2 box2">Dry Food</li>
                    </ul>

                </div>
            </div>
            <div className="col-sm">
               <PopularItems></PopularItems>
            </div>

        </div>
    );
};

export default Sidebar;
