import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBqllHtZjUPztiUcNvzXLzzwZKMLOYtJ6g",
    authDomain: "vue-firebase-diploma.firebaseapp.com",
    databaseURL: "https://vue-firebase-diploma-default-rtdb.firebaseio.com",
    projectId: "vue-firebase-diploma",
    storageBucket: "vue-firebase-diploma.appspot.com",
    messagingSenderId: "788233654412",
    appId: "1:788233654412:web:47ff3edb7382891e316ba9",
    measurementId: "G-EQECWXYV79"
  };

initializeApp(firebaseConfig)

const auth = getAuth()
export{
    auth
}