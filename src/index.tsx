import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './index.css';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCz2QqITlDORUlJOMKHjgFLGpe3ZRIFNT8",
  authDomain: "fir-test-project-6d951.firebaseapp.com",
  databaseURL: "https://fir-test-project-6d951-default-rtdb.firebaseio.com",
  projectId: "fir-test-project-6d951",
  storageBucket: "fir-test-project-6d951.appspot.com",
  messagingSenderId: "519500804019",
  appId: "1:519500804019:web:33710736a52736436d25c6"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
