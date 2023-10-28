import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from 'webfontloader';
import { BrowserRouter } from 'react-router-dom';

WebFont.load(
  {
  typekit:{
    id:'1820e382f31c77d581ee55e9f9fb7394e6fa185e',
  },
  active:function(){
    console.log('iam loading')
    ReactDOM.render(<App/>,document.getElementById('root'))
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
