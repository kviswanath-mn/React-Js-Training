import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// var user = {
//   id:"Viswa",
//   phone:7702
// }
// var user2 = user;
// console.log(user2)//.id,user2.phone)

// var user3 ={...user}
// console.log("user3",user3)
// user.id="Fury";
// console.log(user2)

// user2.id="Kota";
// console.log(user)
// console.log(user2)
// console.log("user3",user3)

