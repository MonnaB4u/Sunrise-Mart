import React from 'react';

import Items from './Items';
import './PopularItems.css'
import Carousels from '../Carusel/Carusels';
import Carusels2 from '../Carusel/Carusels2';
import OfferLogo from '../OfferLogo/OfferLogo';
import { useNavigate } from 'react-router-dom';

const PopularItems = () => {
const navigate = useNavigate()
    // console.log(popularData)
    return (
        <div>
            <div className="row">
                <div class="grid grid-rows-2 grid-flow-col gap-4 mt-3 ">
                    <div class="row-end-3 row-span-2 ...  text-end ">
                        <p className="h2 textcolor font-semibold">New Items</p>
                    </div>
                    <div class="row-start-1 text-end row-end-3... mt-2">
                        <a onClick={() => navigate('/allProduct')}  href="" className="h5 textcolor mr-3 font-semibold"> Show All</a>
                    </div>
                </div>
                <div>
                    <Items></Items>
                    <Carousels></Carousels>

                </div>


            </div>
        </div>
    );
};

export default PopularItems;
