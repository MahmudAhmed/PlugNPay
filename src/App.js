import React from 'react';
import './stylesheets/Dice.css';
import './stylesheets/Input.css';
import DiceApp from './components/dice'
import InputApp from './components/input'

function App() {
  return (
    <div className="App">
      <DiceApp />
      <InputApp />
    </div>
  );
}

export default App;
