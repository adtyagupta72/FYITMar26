import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() 
{
  const [counter, setCounter] = useState(0)
  let incrementCounter=()=>
  {
    setCounter(counter+1)
  }

  return (
    <div>
      Counter: {counter}
      <br/>
      <button onClick={()=> incrementCounter()}>
        Increment Counter
      </button>
    </div>
  );
}

export default App;

/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/