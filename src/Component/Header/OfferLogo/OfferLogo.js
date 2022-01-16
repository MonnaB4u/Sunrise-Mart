import React from 'react';
import logo1 from '../../Data/Image/Buy 1 Get 1 free H3 17 Aug 2021.jpg'
import logo2 from '../../Data/Image/Bye More Save-More H3 17 Aug 2021.jpg'
import logo3 from '../../Data/Image/Half Price Sale H3 17 Aug 2021.jpg'
import logo4 from '../../Data/Image/Popular items SBSB 21 Sep 2021.jpg'
import './OfferLogo.css'

const OfferLogo = () => {
    return (
        <div>
            <div className="row">
               <div  style={{ margin: '0px 5px' , textAlign: 'center', }}>
                    <div className="flex p-5 justify-content-center ">
                    <img src={logo1} alt="" class="img-fluid logo  mx-3 box2 rounded border" />
                    <img src={logo2} alt="" class="img-fluid logo mx-3 box2 rounded border" />
                    <img src={logo3} alt="" class="img-fluid logo mx-3 box2 rounded border" />
                    <img src={logo4} alt="" class="img-fluid logo mx-3 box2 rounded border" />
                </div>
               </div>
            </div>
           <div className="border-b-4 border-gray-400 "></div>
        </div>
    );
};

export default OfferLogo;
