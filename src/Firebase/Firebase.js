import firebase from 'firebase/app';
import 'firebase/firestore';



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAfdYXZBm5dEFejYr5SElhua1qYg7yPyUU",
    authDomain: "crud-app-dcb74.firebaseapp.com",
    projectId: "crud-app-dcb74",
    storageBucket: "crud-app-dcb74.appspot.com",
    messagingSenderId: "428254097636",
    appId: "1:428254097636:web:87e7dd1a5c6440576b7cf1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;