import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyCXVeR9ueYjw1WOFk3F7xvirFwbxec3hvk",
    databaseURL: "https://kind-app-d87b4-default-rtdb.europe-west1.firebasedatabase.app/",
    authDomain: "kind-app-d87b4.firebaseapp.com",
    projectId: "kind-app-d87b4",
    storageBucket: "kind-app-d87b4.appspot.com",
    messagingSenderId: "610623814297",
    appId: "1:610623814297:web:f2ae7ecc9a8e97fc849608",
    measurementId: "G-J2X3CWRBYV"
}

firebase.initializeApp(config);

export default firebase;
