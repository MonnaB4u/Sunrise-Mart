import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AlltopPD = () => {
      const [pd, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const url = `https://nameless-shelf-98595.herokuapp.com/topSave`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleDeleteUser = id => {

        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://nameless-shelf-98595.herokuapp.com/topSave/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(datas => {
                    if (datas.deletedCount > 0) {
                        alert('Deleted Successfully')

                        const remaining = pd.filter(user => user._id !== id)
                        setData(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <div>
            <div className="container">
                <div className="row ">
                    {
                        pd.map((each, index) =>
                            <>
                                <div className="col-sm-2 flex justify-center ">
                                    <div className="box   text-center m-3 px-1">
                                        <div className="flex justify-center">
                                            <img src={each.images} className="w-20 m-3" alt="" />
                                        </div>
                                        <p className="h6 font-bold textcolor">{each.name}</p>
                                        <div className="space-x-5 text-center textcolor">
                                            <small>Tk: ${each.price}</small>
                                            <small>Quantity {each.quantity}</small>
                                        </div>
                                        <button onClick={() => handleDeleteUser(each._id)} className="btn my-3 bg-sky-600 text-white">Delete</button>
                                    </div>
                                </div>
                            </>
                        )}
                </div>

            </div>
        </div>
        </div>
    );
};

export default AlltopPD;
