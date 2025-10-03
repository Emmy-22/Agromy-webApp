import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Payment.css'


const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing (replace with real API call, e.g., Stripe)
    alert('Payment processed successfully! Your order and transaction details will be sent to your email.');
  };

  return (
    <div className="payment-container">
      <header className="payment-header">
        <Link to="/store" className="back-link">← Back to Store</Link>
        <h1 className="header-title">Payment details</h1>
      </header>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="field-group">
          <label htmlFor="card-number">Card number</label>
          <div className="card-input">
            <input
              type="text"
              id="card-number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 '))}
              placeholder="0000 0000 0000 0000"
              maxLength="19"
              required
            />
            <div className="card-logo">
              <span className="mastercard">MasterCard</span> {/* Simple placeholder; use SVG for real icon */}
            </div>
          </div>
        </div>
        <div className="field-group">
          <label htmlFor="cardholder-name">Cardholder name</label>
          <input
            type="text"
            id="cardholder-name"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            placeholder="Joyce Uzoma"
            required
          />
        </div>
        <div className="expiry-cvv-group">
          <div className="field-group expiry">
            <label htmlFor="expiry-date">Expiry date</label>
            <input
              type="text"
              id="expiry-date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value.replace(/\D/g, '').replace(/(\d{2})(\d{0,4})/, '$1/$2'))}
              placeholder="MM/YYYY"
              maxLength="7"
              required
            />
          </div>
          <div className="field-group cvv">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
              placeholder="000"
              maxLength="3"
              required
            />
          </div>
        </div>
        <p className="email-note">Your order and transaction details will be sent to your email after a successful payment</p>
        <button type="submit" className="proceed-button">
          <span className="checkmark">✓</span> Proceed with payment
        </button>
      </form>
    </div>
  );
};

export default Payment;