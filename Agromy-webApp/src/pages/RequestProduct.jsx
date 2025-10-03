import React, { useState } from 'react';
import { Send, X } from 'react-feather';
import '../styles/RequestProduct.css'; 

const RequestProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    quantity: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call (replace with your actual backend endpoint, e.g., fetch('/api/request-product'))
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Mock delay
      console.log('Product request submitted:', formData); // In real app, send to server
      setIsSubmitted(true);
      setFormData({ productName: '', description: '', quantity: '', email: '' });
    } catch (error) {
      console.error('Error submitting request:', error);
      alert('Failed to submit request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="request-product success-message">
        <h2>Request Submitted Successfully!</h2>
        <p>Thank you for your request. Our team will review it and get back to you soon.</p>
        <button onClick={() => setIsSubmitted(false)} className="btn-secondary">
          <X size={16} /> Request Another Product
        </button>
      </div>
    );
  }

  return (
    <div className="request-product">
      <h1>Request a Product</h1>
      <p className="subtitle">Tell us about the product you'd like to request from our Agromy store.</p>
      
      <form onSubmit={handleSubmit} className="request-form">
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
            placeholder="e.g., Organic Fertilizer"
          />
        </div>

        <div className="form-group2">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            placeholder="Provide details about the product (e.g., quantity needed, specifications)"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            required
            placeholder="e.g., 50 kg"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@domain.com"
          />
        </div>

        <button type="submit" className="btn-primary" disabled={isLoading}>
          {isLoading ? 'Submitting...' : (
            <>
              <Send size={16} /> Submit Request
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default RequestProduct;