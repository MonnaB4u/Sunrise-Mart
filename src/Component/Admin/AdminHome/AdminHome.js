import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import AdminNav from '../AdminNav/AdminNav';

const AdminHome = () => {
    const [loggedInuser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <AdminNav></AdminNav>
            <div className=" d-flex justify-content-center">
                <div className=" mt-5 h5 ">
                    <h1 className="text-primary">Hello {loggedInuser.name} </h1>
                    <h2 className="text-success">WellCome to the admin Page </h2>
                    <p className="text-success">You can update the travel information, travel place . you can seen users feedback and you can update the hotel places also</p>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
