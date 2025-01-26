import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBiMaovA2h6dw-bjDsx8YiP8DDCJbWyo4Y",
  authDomain: "fir-login-authentication-ef5a6.firebaseapp.com",
  projectId: "fir-login-authentication-ef5a6",
  storageBucket: "fir-login-authentication-ef5a6.firebasestorage.app",
  messagingSenderId: "439790566139",
  appId: "1:439790566139:web:0b72ea64fd516f7fb30e5e",
  measurementId: "G-2MZJG9JXL3"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);