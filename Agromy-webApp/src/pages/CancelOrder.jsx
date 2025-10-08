import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { X, AlertTriangle, CheckCircle } from 'react-feather';
import '../styles/CancelOrder.css'; 

const CancelOrder = () => {
  const { cartItems, removeItem } = useCart();
  const [cancellingItem, setCancellingItem] = useState(null);
  const [isCancelled, setIsCancelled] = useState(false);

  const handleCancelClick = (itemId) => {
    setCancellingItem(itemId);
  };

  const confirmCancel = () => {
    if (cancellingItem) {
      removeItem(cancellingItem);
      setIsCancelled(true);
      setCancellingItem(null);
      setTimeout(() => setIsCancelled(false), 3000); // Hide success after 3s
    }
  };

  const cancelCancel = () => {
    setCancellingItem(null);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cancel-empty">
        <X size={64} color="#e53e3e" />
        <h2>No Orders to Cancel</h2>
        <p>Your cart is empty. <a href="/store">Browse products</a> to place an order.</p>
      </div>
    );
  }

  if (isCancelled) {
    return (
      <div className="cancel-success">
        <CheckCircle size={64} color="#10B981" />
        <h2>Item Cancelled Successfully!</h2>
        <p>The item has been removed from your order.</p>
      </div>
    );
  }

  return (
    <div className="cancel-container">
      <Link to="/store" className="back-links">← Back to Store</Link>
      <h1><AlertTriangle size={32} color="#e53e3e" /> Cancel Order</h1>
      <p className="subtitle">Select an item below to cancel it from your current order.</p>
      
      <div className="cancel-items">
        {cartItems.map(item => (
          <div key={item.id} className="cancel-item">
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="item-meta">
                Quantity: {item.quantity} | ₦{item.basePrice.toLocaleString()} each | Total: ₦{(item.basePrice * item.quantity).toLocaleString()}
              </p>
            </div>
            
            <button 
              onClick={() => handleCancelClick(item.id)} 
              className="cancel-btn"
            >
              Cancel Item
            </button>
          </div>
        ))}
      </div>

      {cancellingItem && (
        <div className="confirm-modal">
          <div className="confirm-content">
            <AlertTriangle size={48} color="#e53e3e" />
            <h2>Confirm Cancellation</h2>
            <p>Are you sure you want to cancel this item? This action cannot be undone.</p>
            <div className="confirm-buttons">
              <button onClick={confirmCancel} className="confirm-yes">
                Yes, Cancel
              </button>
              <button onClick={cancelCancel} className="confirm-no">
                No, Keep It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CancelOrder;
