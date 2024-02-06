import React, { useState } from 'react';
import './App.css'; // Ensure this file exists and is correctly linked for styles

function App() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={text} onChange={handleChange} placeholder="Type something..." />
      <div className="font-display">
        <div className="font-name">Roboto</div>
        <div className="text-display roboto">{text}</div>
      </div>
      <div className="font-display">
        <div className="font-name">Arial</div>
        <div className="text-display arial">{text}</div>
      </div>
      <div className="font-display">
        <div className="font-name">Times New Roman</div>
        <div className="text-display times">{text}</div>
      </div>
      <div className="font-display">
        <div className="font-name">Montserrat</div>
        <div className="text-display montserrat">{text}</div>
      </div>
      <div className="font-display">
        <div className="font-name">Open Sans</div>
        <div className="text-display opensans">{text}</div>
      </div>
    </div>
  );
}

export default App;


