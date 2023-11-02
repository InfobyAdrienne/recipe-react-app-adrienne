import './App.css';
import React from 'react';
import Search from './components/Search.js';
import Navigation from './components/Navigation.js';

function App() {
  return (
    <div className="container">
      <Navigation />
      <Search />
    </div>
  );
}

export default App;
