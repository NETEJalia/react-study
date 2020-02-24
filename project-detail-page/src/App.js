import React from 'react';
import List from './Components/listings.js';
import Header from './Components/header.js';
import './scss/components.scss';
import './scss/variables.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
