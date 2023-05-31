import React from 'react';
import StarCounter from './StarCounter';
import './App.css';

function App() {
  return (
    <div className="App">

      <nav className="navbar">

        <div className="logo">

          <img src="rick and morty space.jpg" alt="Logo" />
          
        </div>
        <div className="menu">

          <button>Menu</button>

        </div>
      </nav>
      <h1 className='heading'>StarCounter</h1>
      <StarCounter />
    </div>
  );
}

export default App;
