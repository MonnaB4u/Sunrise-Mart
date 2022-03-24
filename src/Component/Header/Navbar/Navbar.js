import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css'

const Navbar = () => {
        const [loggedInuser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="navbar">
            <nav className='ml-auto'>
                <Link className="mx-2 textcolor h6 font-bold" to="/admin">  Admin <small className="border-l-2 border-sky-700 mx-2"></small></Link>
                <Link className="mr-2 textcolor h6 font-bold" to="/help">Help <small className="border-l-2 border-sky-700 mx-2"></small></Link>
                <Link className="mr-3 textcolor h6 font-bold" to="/feedback">Feedback <small className="border-l-2 border-sky-700 mx-2"></small></Link>
                {
                    loggedInuser.name ?
  // <button onClick={() => setLoggedInUser("")} className="btn text-white border h-50 m-2 mt-3">LogOut</button>
                        <span onClick={() => setLoggedInUser("")} className="text-danger mr-3 h6 font-bold">LogOut</span>
                        :
                        <Link className="mr-3 textcolor h6 font-bold" to="/login">Login </Link>
                }

            </nav>
        </div>
    );
};

export default Navbar;
