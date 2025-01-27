import { initializeApp, setLogLevel } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBiMaovA2h6dw-bjDsx8YiP8DDCJbWyo4Y",
  authDomain: "fir-login-authentication-ef5a6.firebaseapp.com",
  projectId: "fir-login-authentication-ef5a6",
  storageBucket: "fir-login-authentication-ef5a6.firebasestorage.app",
  messagingSenderId: "439790566139",
  appId: "1:439790566139:web:0b72ea64fd516f7fb30e5e",
  measurementId: "G-2MZJG9JXL3"
};



//intialize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

//handle google sign in
const handleGoogleLogin = async (setError) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log('Google Sign-In:', result.user);
    setError('');

  } catch (err) {
    console.log(err);
    setError('Google Sign-In failed');

  }
}

//handle email and password login
const handleEmailLogin = async (e, setError) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in:', userCred.user);
    setError('');
  } catch (err) {
    console.log(err);
    setError('Invalid email or password');
  }
  e.target.reset();
}



export { auth, googleProvider, handleGoogleLogin, handleEmailLogin }

