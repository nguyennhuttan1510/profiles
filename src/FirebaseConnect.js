import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAPJMfwSaJQMEUFuWgjHCIKvSIzm_hLVOs",
  authDomain: "nhuttanprofile.firebaseapp.com",
  databaseURL: "https://nhuttanprofile.firebaseio.com",
  projectId: "nhuttanprofile",
  storageBucket: "nhuttanprofile.appspot.com",
  messagingSenderId: "426971855678",
  appId: "1:426971855678:web:668e118937daa0c678ca6f",
  measurementId: "G-FXHGN32XJP",
};
// Initialize Firebase

export const FirebaseConnect = firebase.initializeApp(firebaseConfig);
