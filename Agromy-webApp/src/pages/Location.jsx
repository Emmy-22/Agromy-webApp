import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Location.css';

const Location = () => {
  return (
    <div className="location-container">
      <header className="location-header">
        <Link to="/store" className="back-link">← Back to Store</Link>
        <h1 className="logo">Choose Drop Location</h1>
      </header>
      <main className="location-main">
        <p>Select your preferred drop-off location. (Placeholder)</p>
      </main>
    </div>
  );
};

export default Location;