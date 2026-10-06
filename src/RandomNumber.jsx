import React, { useState } from 'react';

/**
 * RandomNumber Component
 * 
 * Demonstrates key React concepts:
 * 1. useState hook for state management
 * 2. Event handling (button click)
 * 3. Conditional rendering
 */
function RandomNumber() {
  // Step 1: Declare state variable 'randomNumber' initialized to null.
  // 'null' represents the state before any number has been generated.
  const [randomNumber, setRandomNumber] = useState(null);

  // Step 2: Function to generate a random integer between 1 and 100
  const generateRandomNumber = () => {
    // Math.random() gives a float between 0 (inclusive) and 1 (exclusive)
    // Math.random() * 100 gives float between 0 and 99.999...
    // Math.floor(...) converts to integer 0 to 99
    // + 1 shifts the range to 1 to 100
    const number = Math.floor(Math.random() * 100) + 1;

    // Update state with the newly generated number
    setRandomNumber(number);
  };

  return (
    <main className="app-card">
      {/* Header section */}
      <header className="card-header">
        <h1 className="title">Random Number Generator</h1>
        <p className="subtitle">Generate a random number between 1 and 100</p>
      </header>

      {/* Number Display Box with Conditional Rendering */}
      <section className="display-box" aria-live="polite">
        {randomNumber === null ? (
          <p className="placeholder-text">No number generated yet</p>
        ) : (
          <p className="number">{randomNumber}</p>
        )}
      </section>

      {/* Fixed Range Indicator */}
      <div className="range-badge">
        <span className="range-label">Range:</span>
        <span className="range-value">1 – 100</span>
      </div>

      {/* Action Button */}
      <button 
        type="button" 
        className="generate-btn" 
        onClick={generateRandomNumber}
        aria-label="Generate Random Number"
      >
        <svg 
          className="btn-icon" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
        </svg>
        Generate Random Number
      </button>
    </main>
  );
}

export default RandomNumber;
