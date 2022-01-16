import React, { useState } from 'react';
import Carousel from 'react-grid-carousel';
import { useNavigate } from 'react-router-dom';
import fakedata from '../../Data/img'
const Carusels2 = () => {
    const [data, setData] = useState(fakedata)
     const navigate = useNavigate()
    return (
        <div className="my-4 ">
            <p className="h3 text-green-600 text-center mt-3 mb-5">Browse all categories <i></i></p>

            <Carousel rows={1} cols={6} gap={0}>
                {data.map((each, iindex) => {
                    return (
                        <Carousel.Item >
                            <div
                                style={{
                                    margin: '0 10px',
                                    textAlign: 'center',

                                }}
                                className="border rounded"
                            >
                                <div class="row p-4">
                                    <img  onClick={() => navigate('/allProduct')} src={each.images} alt="" className="img-fluid w-30" />

                                    <p className="h6 mt-1 font-bold text-center text-emerald-800 ">{each.name}</p>

                                </div>
                            </div>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            <div className="border-b-4 border-gray-400 "></div>
        </div>


    );
};

export default Carusels2;
