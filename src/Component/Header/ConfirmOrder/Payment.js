import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Data/index'
import Nav1 from '../Navbar/Nav1';
import Sidebar2 from '../Sidebar/Sidebar2';
const Payment = () => {
    const { conID } = useParams()
    const finddata = data.find(pd => pd.id.toString() === conID)
    console.log(finddata)

    return (
        <div>
            <Nav1></Nav1>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <Sidebar2></Sidebar2>
                    </div>
                    <div className="col-sm-8">


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
