import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../Data/realData'
import './Top.css'
const Topsave = () => {
    const [datas] = useState(data)
    const filter = datas.slice(0, 5)
    console.log(filter)
    const navigate = useNavigate()
    return (
        <div className="">
            <p className="h3 textcolor text-center font-bold border-bottom">Top Savers Today!</p>
            <div className="row flex justify-center ml-4 px-5">
                {
                    filter.map((each, index) =>
                        <div className="col-sm-2 ml-4 py-2 mx-3">

                            <div className="box border ">
                                <div className="bg-danger rounded-full w-25 py-3 text-center" id="heart">
                                    <a href="#" class="  h6">tk 5% off</a>
                                </div>

                                <div className="flex justify-center ">
                                    <img className="bg-none items-center w-20" src={each.images} alt="" />
                                </div>

                                <p className="h5 text-center textcolor text-justify">{each.name}</p>
                                <div className="space-x-6 text-center">
                                    <small>${each.price}</small>
                                    <small>Quantity: {each.quantity}</small>
                                </div>
                                <div className="text-center my-3">
                                    <button onClick={() => navigate(`/orderinventory/${each.id}`)} className="btn border rounded-full text-white bg-sky-700 ">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>

    );
};

export default Topsave;
