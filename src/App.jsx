import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(10);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');


  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSymbols]);

  const generatePassword = () => {
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) characters += '0123456789';
    if (includeSymbols) characters += '!@#$%^&*()_+[]{}|;:,.<>?';

    let tempPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      tempPassword += characters[randomIndex];
    }

    setPassword(tempPassword);
  };

  return (
    <div className="body">
      <div className="container">
        <h1>Password Generator</h1>

        <div className="search-bar">
          <input
            type="text"
            className="input"
            value={password}
            placeholder="Generated Password"
          />
          <button onClick={generatePassword}>Regenerate</button>
        </div>

        <div className="sub-container">
          <label className="slider-label">
            Password Length: {length}
            <input
              type="range"
              className="slider"
              min="12"
              max="40"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            /></label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            Include Numbers
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            Include Symbols
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;

