import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreditCard, Lock } from 'react-feather';
import { Link } from 'react-router-dom';
import '../styles/Payment.css'; 

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, total } = location.state || { cartItems: [], total: 0 };
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === 'cardNumber') {
      processedValue = value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 '); // Numbers only, add space every 4 digits
      processedValue = processedValue.substring(0, 19); // Enforce max length
    } else if (name === 'cvv') {
      processedValue = value.replace(/\D/g, ''); // Numbers only for CVV
      processedValue = processedValue.substring(0, 3);
    } else if (name === 'expiry') {
      processedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d{2})?/, '$1/$2'); // MM/YY format
      processedValue = processedValue.substring(0, 5);
    }
    setFormData({ ...formData, [name]: processedValue});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    const savedPurchases = localStorage.getItem('agromy-purchases') || '[]';
  const purchases = JSON.parse(savedPurchases);
  const newPurchases = [...purchases, ...cartItems.map(item => ({
    name: item.name,
    amount: item.basePrice * item.quantity,
    quantity: item.quantity,
    price: item.basePrice,
    status: 'Purchased',
    date: new Date().toLocaleDateString()
  }))];
  localStorage.setItem('agromy-purchases', JSON.stringify(newPurchases));
  
  clearCart(); 
  
  alert('Payment successful! Order confirmed.');
  navigate('/dashboard');
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
      <Link to="/store" className="back-link">← Back to Store</Link>
      <h1><CreditCard size={32} /> Secure Payment</h1>
      <p>Total: ₦{total.toLocaleString()}</p>
      </div>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiry">Expiry Date</label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              placeholder="MM/YY"
              maxLength={5}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
              maxLength={3}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="name">Name on Card</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>
        
        <button type="submit" className="pay-btn" disabled={isProcessing}>
          {isProcessing ? 'Processing...' : `Pay ₦${total.toLocaleString()}`}
        </button>
      </form>
    </div>
  );
};

export default Payment;


