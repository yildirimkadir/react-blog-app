import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { getDatabase, ref, push, set, remove, update } from "firebase/database";
// import { useState, useEffect } from "react";
// import { useContext } from 'react';
// import { BlogContext } from '../context/BlogContext';

// import { toastWarnNotify, toastSuccessNotify, toastErrorNotify } from "../helpers/Toastify";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        await updateProfile(auth.currentUser, {
            displayName: displayName,

        });
        navigate("/login");
        console.log(userCredential);

    } catch (err) {
        console.log(err.message)

    }
}

export const signIn = async (email, password, navigate) => {

    try {
        let userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        navigate('/');
        console.log(userCredential);
    } catch (err) {
        console.log(err);
    }
};

export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user);
        } else {
            // User is signed out
            setCurrentUser(false);
        }
    });
};

export const logOut = () => {
    signOut(auth);
};

export const signUpProvider = (navigate) => {

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            navigate('/');
        })
        .catch((error) => {
            // Handle Errors here.
            console.log(error);
        });
};

export const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
        })
        .catch((err) => {
            console.log(err.message);
        });
};


// Database Functions 

export const addBlog = (blogValue) => {
    const db = getDatabase(app);
    const userRef = ref(db, "blogs/");
    const newUserRef = push(userRef);
    set(newUserRef, blogValue);
}


export const deleteBlog = (id) => {
    const db = getDatabase(app);
    remove(ref(db, "blogs/" + id));
}

export const updateBlog = (id, data) => {
    const db = getDatabase(app);
    const updates = {}
    updates["blogs/" + id] = data;
    return update(ref(db), updates)
}



