import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import allData from '../../Data/index2'
import './AllProduct2.css'
const AllProduct = () => {
    const [pd, setData] = useState([])
    const navigate = useNavigate()
    useEffect  (() => {
        const url =`http://localhost:5000/dataCollection`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="container">
            <div className="row ">
                {
                    pd.map((each, index) =>
                        <>
                            <div className="col-sm-3 flex justify-center ">
                                <div className="box   text-center m-3 px-1">
                                    <div className="flex justify-center">
                                        <img src={each.images} className="w-20 m-3" alt="" />
                                    </div>
                                    <p className="h6 font-bold textcolor">{each.name}</p>
                                    <div className="space-x-5 text-center textcolor">
                                        <small>Tk: ${each.price}</small>
                                        <small>Quantity {each.quantity}</small>
                                    </div>
                                    <button onClick={() => navigate(`/orderinventory/${each._id}`)} className="btn my-3 bg-sky-600 text-white">Add to Cart</button>
                                </div>
                            </div>
                        </>
                    )}
            </div>

        </div>
    );
};

export default AllProduct;
