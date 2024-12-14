import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Content from './pages/content'
import Image from './pages/Image';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Home />
  <App/>
 <Content/>
 <Image/>
 
 
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

