import React, { useState } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [theme, setTheme] = useState('light'); // Default theme

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        setResult(eval(input).toString()); // Evaluate expression
      } catch {
        setResult('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`calculator ${theme}`}>
      <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
      <Display input={input} result={result} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
