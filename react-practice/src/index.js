import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TestComp from './TestComp';
import MyClassComponent from './MyClassComponent';
import Parent from './Parent';
import ReactForms from './ReactForms';
import ReactRouterExample from './RRouter/ReactRouterExample';

const root = ReactDOM.createRoot(document.getElementById('root'));

let myParentCallBackFunction = (message) => 
{
  console.log("HI From parent! ")
  console.log("Message from child: ", message)
}

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyClassComponent/> */}
    {/* <Parent/> */}
    {/* <TestComp count={2} color="orange" clickFunction={()=>{
      console.log("This is a callback function from Index.js")
    }} callBackFun = {myParentCallBackFunction}/> */}
    {/* <ReactForms/> */}
    <ReactRouterExample/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals