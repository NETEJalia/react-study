import React from 'react';
import './App.css';
import List from './Components/listings.js';
import Header from './Components/header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
