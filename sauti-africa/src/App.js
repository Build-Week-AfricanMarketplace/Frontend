import React from 'react';
import logo from './logo.svg';
import './App.css';

import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Sauti Africa</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

        <SignUpForm />

    </div>
  );
}

export default App;
