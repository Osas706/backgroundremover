import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Main />
    </div>
  );
}

export default App;
