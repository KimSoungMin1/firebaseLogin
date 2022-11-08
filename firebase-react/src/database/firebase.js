// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Key값은 파이어 베이스 콘솔 창에서 다시 들고 와서 추가하기

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
