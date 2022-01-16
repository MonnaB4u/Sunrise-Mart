import React from 'react';
import { useNavigate } from 'react-router-dom';
import fakedata2 from '../../Data/index2'
import './PopularItems.css'
const Items = () => {

    const popularData = fakedata2.slice(0, 4)
    // console.log(popularData)
    const navigate = useNavigate()
    return (
        <div>
            <div className="row mx-5">
                {
                    popularData.map((each, index) =>
                        <div className="col-md-3">
                            <div className="box border m-3 px-3">
                                <div className="flex justify-center ">
                                    <img className="bg-none items-center w-20" src={each.images} alt="" />
                                </div>

                                <p className="h5 text-center textcolor text-justify">{each.name}</p>
                                <div className="space-x-6 text-center textcolor">
                                    <small>${each.price}</small>
                                    <small>Quantity: {each.quantity}</small>
                                </div>
                                <div className="text-center my-3">
                                    <button onClick={()=> navigate(`/orderinventory/${each.id}`)} className="btn border rounded-full text-white bg-sky-700 ">Add to Cart</button>
                                </div>

                            </div>
                        </div>

                    )
                }
            </div>

        </div>
    );
};

export default Items;
