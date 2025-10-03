import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CancelOrder.css';

const CancelOrder = () => {
  return (
    <div className="cancel-container">
      <header className="cancel-header">
        <Link to="/store" className="back-link">← Back to Store</Link>
        <h1 className="logo">Cancel Order</h1>
      </header>
      <main className="cancel-main">
        <p>Cancel your order here. (Placeholder)</p>
      </main>
    </div>
  );
};

export default CancelOrder;