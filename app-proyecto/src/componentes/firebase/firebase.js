
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDwUz27AFCimvA4QvmfjlSiCBeJs_C_1Bs",
  authDomain: "react-final-coder.firebaseapp.com",
  projectId: "react-final-coder",
  storageBucket: "react-final-coder.appspot.com",
  messagingSenderId: "300479894686",
  appId: "1:300479894686:web:10a7074bb7a664d10c578f"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  
  export {auth}