import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGuu1bNt6YVVYItVdhvz-SY7nEnUJasIg",
    authDomain: "crwn-clothing-db-bad89.firebaseapp.com",
    projectId: "crwn-clothing-db-bad89",
    storageBucket: "crwn-clothing-db-bad89.appspot.com",
    messagingSenderId: "285656524255",
    appId: "1:285656524255:web:54db30ba793cbcf249506a"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);