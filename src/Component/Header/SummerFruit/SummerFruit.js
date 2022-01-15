import React, { useState } from 'react';
import Carousel from 'react-grid-carousel';
import fakedata from '../../Data/Fruits2'
const SummerFruit = () => {
    const [data,setData]= useState(fakedata)
    return (
        <div className=" m-5">
            <p className="h4 textcolor  font-bold mx-5 text-start  mb-4">Summer Fruit<i></i></p>

            <Carousel rows={1} cols={5}>
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
                                <div class="row p-4 text-center">
                                    <img src={each.images} alt="" className="img-fluid w-30" />
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

export default SummerFruit;
