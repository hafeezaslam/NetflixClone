import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE6BSVbZgG3f5Cw3AKe6Rj2czOM_4ZYfw",
  authDomain: "netflix-2ca32.firebaseapp.com",
  projectId: "netflix-2ca32",
  storageBucket: "netflix-2ca32.appspot.com",
  messagingSenderId: "50420361263",
  appId: "1:50420361263:web:c680fb7678020d1402beda"
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);
export { firebase };
