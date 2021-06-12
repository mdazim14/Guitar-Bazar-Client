import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {userContext} from '../../App';
import {useHistory, useLocation} from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const location=useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const history = useHistory();
    const [loggedInUser, setLoggedInUser]=useContext(userContext);

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                // console.log(user);
                setLoggedInUser(user);
                history.replace(from);

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage, errorCode, errorMessage, email, credential);
            });

    }
    return (
        <div className=" m-5 p-5 container border border-blue bg-warning">
            <h1> Name: {loggedInUser.displayName}</h1>
            <button className=" p-3 btn btn-primary" onClick={handleGoogleSignIn}>Sign In With Google</button>
        </div>
    );
};

export default Login;