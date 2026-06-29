import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
// import DefaultDialog from "./DefaultDialog";
import DialogPOC from './DilaogPOC';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <button onClick={() => setIsModalOpen(true)}>Open Default Dialog</button>

      <DialogPOC 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Terms of Service"
      >
        <p>This is a native dialog box layout inside a React tree.</p>
      </DialogPOC>
    </div>
  );
}