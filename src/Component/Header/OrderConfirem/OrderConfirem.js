import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bigata from '../../Data/index2'
const OrderConfirem = () => {
    const { id } = useParams()
    const [datas, setData] = useState([])
    // const finddata =datas.find(pd=>pd._id.toString() === id)
    //  const finddata = datas.find(pd => pd._id.toString() === id)


    useEffect(() => {
        const url = `http://localhost:5000/dataCollection/${id}`
        const url2 = `http://localhost:5000/topSave/${id}`
        const url3 = `http://localhost:5000/trending/${id}`

        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))

        fetch(url2)
            .then(res => res.json())
            .then(data => setData(data))

        fetch(url3)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    //  const finddata =datas.length !== 0 && datas.find(pd => pd._id.toString() === id)
    console.log('datas', datas)
    return (
        <div className="container">
            <div className="box mt-5 border">

                <div className="text-center my-5">
                    <p className="h4">You have Order <span className="text-danger">{id}</span> </p>
                    <h2 className="h1 text-success"> And Your Order Have Confirmed</h2>
                </div>

            </div>
        </div>
    );
};

export default OrderConfirem;
