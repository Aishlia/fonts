import React, { useState } from 'react';
import './App.css'; // Make sure to have this file for custom styles

function App() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={text} onChange={handleChange} placeholder="Type something..." />
      <div className="text-display roboto">{text}</div>
      <div className="text-display arial">{text}</div>
      <div className="text-display times">{text}</div>
    </div>
  );
}

export default App;

