import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { API_KEY, MSI, APP_ID } from "@env";
import 'firebase/compat/firestore';
<<<<<<< HEAD
=======
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
>>>>>>> 64f4d1e9f32e9fd66626232d1d89b66fd99d5a89

const firebaseConfig = {
    apiKey: "AIzaSyC1UFuv_3Wovsm6xRI0c8n0yOJCxrx3odg",
    authDomain: "student-digest-app.firebaseapp.com",
    databaseURL: "https://student-digest-app-default-rtdb.firebaseio.com",
    projectId: "student-digest-app",
    storageBucket: "student-digest-app.appspot.com",
    messagingSenderId: "94057697013",
    appId: "1:94057697013:web:48b4f04b2ad39e4e623fbc",
    measurementId: "${config.measurementId}"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

firebase.initializeApp(firebaseConfig);

<<<<<<< HEAD
const doSignIn = (onSucess, onFail) =>{
    return async(email, password) =>{
        try{
<<<<<<< HEAD
            let credential = await firebase.auth().signInWithEmailAndPassword(email,password);
            if (onSucess) onSucess(credential);
        }catch(error){
            console.log(error);
            if (onFail) onFail();
=======
            await AsyncStorage.setItem("credentails", JSON.stringify({email : email, password : password}));
            let credential = await firebase.auth().signInWithEmailAndPassword(email,password);
=======
const doSignIn = (onSucess, onFail) => {
    return async (email, password) => {
        try {
            await AsyncStorage.setItem("credentails", JSON.stringify({ email: email, password: password }));
            let credential = await firebase.auth().signInWithEmailAndPassword(email, password);
>>>>>>> upstream/master
            if (onSucess) onSucess(credential);
        } catch (error) {
            try {
                await AsyncStorage.removeItem('credentails');
            } catch (e) {
                console.log("could not remove bad cred");
            }
            Toast.show({
                type: 'error',
                text1: 'Bad Email/Password!',
            });
            console.log(error);
            if (onFail) onFail();
            return "bad-email";
<<<<<<< HEAD
>>>>>>> 64f4d1e9f32e9fd66626232d1d89b66fd99d5a89
        }  
    }
}

const doSignUp = (onSucess, onFail) =>{
    return async(email, password, name) =>{
        try{
<<<<<<< HEAD
=======
            await AsyncStorage.setItem("credentails", JSON.stringify({email : email, password : password}));
>>>>>>> 64f4d1e9f32e9fd66626232d1d89b66fd99d5a89
            let credential = await firebase.auth().createUserWithEmailAndPassword(email,password);
=======
        }
    }
}

const doSignUp = (onSucess, onFail) => {
    return async (email, password, name) => {
        try {
            await AsyncStorage.setItem("credentails", JSON.stringify({ email: email, password: password }));
            let credential = await firebase.auth().createUserWithEmailAndPassword(email, password);
>>>>>>> upstream/master
            if (onSucess) {
                onSucess(email, name);
            }
<<<<<<< HEAD
        }catch(error){
<<<<<<< HEAD
            console.log(error);
            if (onFail) onFail();
=======
=======
        } catch (error) {
>>>>>>> upstream/master
            try {
                await AsyncStorage.removeItem('credentails');
            } catch (e) {
                console.log("could not remove bad cred");
            }
            Toast.show({
                type: 'error',
                text1: 'Bad Email/Password!',
            });
            console.log(error);
            if (onFail) onFail();
            return "bad-email";
<<<<<<< HEAD
>>>>>>> 64f4d1e9f32e9fd66626232d1d89b66fd99d5a89
        }  
=======
        }
>>>>>>> upstream/master
    }
}

const doSignOut = (onSucess, onFail) => {
    return async () => {
        try {
            await firebase.auth().signOut();
            if (onSucess) onSucess();
        } catch (error) {
            console.log(error);
            if (onFail) onFail();
        }
    }
}
export { doSignIn, doSignUp, doSignOut }
export default React.createContext(
    {
        isAuthed: false,
        signIn: () => { },
        signUp: () => { },
        signOut: () => { }
    });

