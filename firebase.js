import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBKHABcuXniIzdIMn5B818KBFJbt10Bg3Y",
    authDomain: "fir-13a80.firebaseapp.com",
    projectId: "fir-13a80",
    storageBucket: "fir-13a80.appspot.com",
    messagingSenderId: "550816841199",
    appId: "1:550816841199:web:9d4691da4eb950b1b80a1a"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) :
    firebase.app();

const db = app.firestore();
export default db;