import { initializeApp } from 'firebase/app';
import { getAuth,  } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDYQaVXrE64vLo0jJv5OAGdl4nrBjVVy8U",
    authDomain: "clone-f7d8a.firebaseapp.com",
    projectId: "clone-f7d8a",
    storageBucket: "clone-f7d8a.appspot.com",
    messagingSenderId: "391959421963",
    appId: "1:391959421963:web:6ecfb891b2a3fbc5dc530e",
    measurementId: "G-MRKDWN4FVZ"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

export { auth };