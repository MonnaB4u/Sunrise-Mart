import React, { useContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import initializeAuth from '../firebase/firebase.initialize';
import EmailPassLogin from './EmailPassLogin';
import GithubLogin from './GithubLogin';
import './Login.css'
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();
initializeAuth();

const Login = () => {

    const [loggedInuser, setLoggedInUser] = useContext(UserContext);
    console.log("userCContext", loggedInuser)

    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    const navigate = useNavigate()
    const [logUser, setlogUser] = useState({})

    const handleLogin = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                // let user = {
                //     name: displayName,
                //     email: email,
                //     photoURL: photoURL
                // }

                window.localStorage.setItem('userData', JSON.stringify({
                    loggedIn: true,
                    name: displayName,
                    email: email,
                    photoURL: photoURL
                }));

                const localUser = JSON.parse(window.localStorage.getItem('userData'));
                setLoggedInUser(localUser);
                setlogUser(localUser);
                console.log('userData');


                // setLoggedInUser(user)
                navigate(from)



            })
            .catch(err => {
                alert(err.message)
            })
    }

    const auth = getAuth();
    const handleSignOut = () => {

        signOut(auth)
            .then(() => {
                setlogUser({});
            })
    }

    return (
        <div className="">
            <div>
                <div className="">
                    <EmailPassLogin></EmailPassLogin>
                </div>
                <div className="col-sm text-center">
                    {
                        !logUser.name ?

                            <button className="btn bg-success mb-2 text-white w-25" onClick={() => handleLogin()}> Google</button>

                            :
                            <button className="btn bg-danger w-25" onClick={() => handleSignOut()}>Google Sign Out</button>
                    }

                    <GithubLogin></GithubLogin>
                    <br />
                    {
                        logUser.email &&
                        <div>
                            <h1>WellCome {loggedInuser.name}</h1>
                            <p>Your Email is:-- <a href="">{loggedInuser.email}</a></p>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Login;
