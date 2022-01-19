import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../Data/realData'
const Trending = () => {

    const [datas] = useState(data)
    const slice = datas.slice(5, 10)
    const navigate = useNavigate()

    return (
        <div>
            <div className="container my-4">
                <p className="h3 text-center textcolor border-bottom font-bold">Trending</p>
                <div className="row">
                    {
                        slice.map((each, index) =>
                            <>
                                <div className="col-sm flex justify-center m-3">

                                    <div className="text-center border rounded box2 p-2">
                                        <div className="bg-danger rounded-full text-cent">
                                            <a href="#" class="  h6">tk 50% off</a>
                                        </div>
                                        {/* <div className="flex jsutify-center border">
                                            <img src={each.images} alt="" className="w-20 tetx-center " />
                                        </div> */}
                                        <div className="flex justify-center ">
                                            <img className="bg-none w-20" src={each.images} alt="" />
                                        </div>

                                        <p className="h6 textcolor font-bold">{each.name}</p>
                                        <div className="flex justify-center space-x-3 textcolor">
                                            <small className="h6">  ${each.price} <span className="border-r-2 mx-2 border-sky-700" /></small>
                                            <small className="">Quantity: {each.quantity}</small>
                                        </div>
                                        <button onClick={() => navigate(`/orderinventory/${each.id}`)} className="btn bg-sky-700 text-white rounded-full my-2">Add to Card</button>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Trending;
