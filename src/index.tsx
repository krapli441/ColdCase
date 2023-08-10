// 리액트 라이브러리
import React from "react";
import ReactDOM from "react-dom/client";

// 외부 라이브러리
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";

// Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZfYLz1wGGEf1O57yToDfrBkiqLid3jP0",
  authDomain: "coldcase-7407a.firebaseapp.com",
  projectId: "coldcase-7407a",
  storageBucket: "coldcase-7407a.appspot.com",
  messagingSenderId: "561617465610",
  appId: "1:561617465610:web:57d62ce3acf212133acaf3",
  measurementId: "G-SXHD3KJWV9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 컴포넌트
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
