import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxo3b9G9v8AtrQoQ8rW3lQ4XjavEGjkOY",
    authDomain: "eshop-amzn.firebaseapp.com",
    projectId: "eshop-amzn",
    storageBucket: "eshop-amzn.appspot.com",
    messagingSenderId: "445096326023",
    appId: "1:445096326023:web:6dc7f00f36d598b0581922",
    measurementId: "G-BBB4J22W7R"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();

export default db;