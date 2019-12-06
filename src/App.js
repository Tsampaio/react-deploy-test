import React from 'react';
import profileImage from './img/telmo-pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h3>Author: Telmo Sampaio</h3>
      <img src={profileImage} />
    </div>
  );
}

export default App;
