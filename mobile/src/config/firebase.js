// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// retirar não vamos utilizar
// import { getAnalytics } from "firebase/analytics";
import AsyncStorage from "@react-native-async-storage/async-storage"

import { initializeAuth, getReactNativePersistence } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwJiB83MWpp5iP357K396zCFJvY4FnazU",
    authDomain: "appmobile-prjfinal.firebaseapp.com",
    projectId: "appmobile-prjfinal",
    storageBucket: "appmobile-prjfinal.appspot.com",
    messagingSenderId: "327843681933",
    appId: "1:327843681933:web:7067cd2930550d11b034c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// retirn não vamos utilizar
// const analytics = getAnalytics(app);

const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) })

export { auth } ;