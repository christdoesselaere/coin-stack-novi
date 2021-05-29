import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAlpL0f-ny8zwvqIKjALxhkbEnGOW3e60M",
    authDomain: "coin-stack-bdcd1.firebaseapp.com",
    databaseURL: "https://coin-stack-bdcd1.firebaseio.com",
    projectId: "coin-stack-bdcd1",
    storageBucket: "coin-stack-bdcd1.appspot.com",
    messagingSenderId: "269827122295",
    appId: "1:269827122295:web:80f447a5ac21f9ac55d272",
    measurementId: "G-F05JFWBRRQ"
});

export default firebaseConfig;