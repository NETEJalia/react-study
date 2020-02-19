import React from 'react';
import PostList from './posts/PostList.js';
import './scss/main.scss';

function App() {
  return (
    <div className="App container">
      <div className="main"></div>
      <PostList />
    </div>
  );
}

export default App;
