import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fakedata2 from '../../Data/index2'
import './PopularItems.css'
const Items = () => {

    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const url = `https://nameless-shelf-98595.herokuapp.com/dataCollection`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const popularData = data.slice(0, 4)
    const [text, setText] = useState(false)
    const clicks=() => {
      setText(!text)
    }
    return (
        <div>
            {/* <button onClick={clicks} className="btn btn-primary">{text? 'close' : 'open'}</button> */}
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
                                    <button onClick={() => navigate(`/orderinventory/${each._id}`)} className="btn border rounded-full text-white bg-sky-700 ">Add to Cart</button>
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
