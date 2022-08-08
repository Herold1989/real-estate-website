import firebase from "firebase";

// Your web app's Firebase configuration

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA75rrqovRVZpvQ22k2yBX6SpMWGjmg7UI",
    authDomain: "real-estate-website-3d76d.firebaseapp.com",
    projectId: "real-estate-website-3d76d",
    storageBucket: "real-estate-website-3d76d.appspot.com",
    messagingSenderId: "311928893807",
    appId: "1:311928893807:web:96f650c24b6b30c9def89a"
});

var db = firebaseApp.firestore();

export { db };