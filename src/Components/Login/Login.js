import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = useState({})

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                console.log(user);
                setUser(user);
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
            <h1> Name: {user.displayName}</h1>
            <button className=" p-3 btn btn-primary" onClick={handleGoogleSignIn}>Sign In With Google</button>
        </div>
    );
};

export default Login;