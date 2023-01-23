import React, { useState } from 'react';
import styles from '../styles/Home.module.css';


const FibonacciNumberGenerator = () => {
  const [input, setInput] = useState('');
  const [fibonacciNumbers, setFibonacciNumbers] = useState([]);
  const [error, setError] = useState('');
  const [showButton, setShowButton] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!Number.isInteger(+input) || +input <= 1) {
      setError('Please enter a positive integer');
      setShowButton(true);
      return;
    }

    setError('');
    setFibonacciNumbers([1,1]);
  };
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!Number.isInteger(+input) || +input <= 1) {
      setError('Please enter a positive integer');
      setShowButton(true);
      return;
    }

    setError('');
    setFibonacciNumbers([1,1]);
    for(let i = 0 ; i < +input ;i++)
    {
        handleNextNumber();
    }
  };

  const handleNextNumber = () => {
    const nextNumber = fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2];
    setFibonacciNumbers([...fibonacciNumbers, nextNumber]);

    if (fibonacciNumbers.length === +input) {
      setShowButton(false);
    }
  };

  return (
    <div className={styles.fib}>
      <form onSubmit={handleSubmit}>
        <label>
          Fibanocci size:
          <input type="text" value={input} onChange={handleInputChange} />
        </label>
        <button type="submit">Apply</button>
      </form>
      {error && <p>{error}</p>}
      {fibonacciNumbers.length > 0 && (
        <div>
          <p>Type in "Search" to explore next fibanocci</p>
          <ul>
            {fibonacciNumbers.map((num, idx) => (
              <p key={idx}>{num}</p>
            ))}
          </ul>
          {showButton && (
            <button type="button" onClick={handleNextNumber}>
              Search!
            </button>
          )}
          {!showButton && <p>That's all your Fibonacci numbers</p>}
        </div>
      )}
    </div>
  );
}

export default FibonacciNumberGenerator;
