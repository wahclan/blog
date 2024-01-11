// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogsite-d011b.firebaseapp.com",
  projectId: "blogsite-d011b",
  storageBucket: "blogsite-d011b.appspot.com",
  messagingSenderId: "671644363613",
  appId: "1:671644363613:web:d2eb8d69add30b053016b4",
  measurementId: "G-C1440PM9J7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app)
