import React, { useState } from 'react';
import data from '../../Data/realData'
const Trending = () => {
    const [datas] = useState(data)
    const slice = datas.slice(5, 10)

    return (
        <div>
            <div className="container my-4">
                <p className="h3 text-center textcolor border-bottom font-bold">Trending</p>
                <div className="row">
                    {
                        slice.map((each, index) =>
                            <>
                                <div className="col flex justify-center m-3">

                                    <div className="text-center border p-2">
                                        <div className="bg-danger rounded-full text-cent">
                                            <a href="#" class="  h6">tk 50% off</a>
                                        </div>

                                        <img src={each.images} alt="" />
                                        <p className="h6 textcolor font-bold">{each.name}</p>
                                        <div className="flex justify-center space-x-3 textcolor">
                                            <small className="h6">  ${each.price} <span className="border-r-2 mx-2 border-sky-700" /></small>
                                            <small className="">Quantity: {each.quantity}</small>
                                        </div>
                                        <button className="btn bg-sky-700 text-white rounded-full my-2">Add to Card</button>
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
