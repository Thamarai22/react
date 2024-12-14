import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Cards from './component/Cards';
import Rendering from './component/Rendering';
import Incre from './component/Incre'
import Calc from './component/Calc';
import ThemeToggle from './component/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Cards/> */}
    <Rendering islogged={true} username="Lotus"/>
    {/* <Incre/> */}
    {/* <Calc/> */}
    <ThemeToggle/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

