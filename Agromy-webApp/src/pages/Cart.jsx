import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  Trash2, 
  Minus, 
  Plus, 
  CreditCard 
} from 'react-feather';
import { useCart } from '../contexts/CartContext.jsx';
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const getSubtotal = (basePrice, quantity) => basePrice * quantity;

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    navigate('/payment', { state: {cartItems, total: getTotal()}});
    
    
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <ShoppingCart size={64} color="#10B981" />
        <h2>Your Cart is Empty</h2>
        <p>Add items from the <a href="/store">Store</a> to get started.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1><ShoppingCart size={32} color="#10B981" /> Shopping Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</h1>
      
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="price">₦{item.basePrice.toLocaleString()} each</p>
            </div>
            
            <div className="quantity-section">
              <div className="quantity-controls">
                <button 
                  onClick={() => updateQuantity(item.id, -1)} 
                  className="qty-btn minus"
                  disabled={item.quantity === 1}
                >
                  <Minus size={16} />
                </button>
                <span className="qty">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, +1)} 
                  className="qty-btn plus"
                >
                  <Plus size={16} />
                </button>
              </div>
              <p className="subtotal">Subtotal: ₦{getSubtotal(item.basePrice, item.quantity).toLocaleString()}</p>
            </div>
            
            <button 
              onClick={() => removeItem(item.id)} 
              className="remove-btn"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ₦{getTotal().toLocaleString()}</h3>
        <button onClick={handleCheckout} className="checkout-btn">
          <CreditCard size={20} /> Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;