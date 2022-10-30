import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA0Eh5Q-mqN6e-kgD0Hgm1X3OLztYmZHB0",
  authDomain: "coderhouse-ecommerce-rea-f5eb2.firebaseapp.com",
  projectId: "coderhouse-ecommerce-rea-f5eb2",
  storageBucket: "coderhouse-ecommerce-rea-f5eb2.appspot.com",
  messagingSenderId: "955160523229",
  appId: "1:955160523229:web:c1fd4ad7af891043f00634"
};


const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode> 
);

reportWebVitals();
