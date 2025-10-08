import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { ShoppingBag } from 'react-feather';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { cartItems, getTotal, clearCart } = useCart();
  const [purchasedItems, setPurchasedItems] = useState([]); // Loaded from localStorage/API

  
  useEffect(() => {
    const savedPurchases = localStorage.getItem('agromy-purchases');
    if (savedPurchases) {
      setPurchasedItems(JSON.parse(savedPurchases));
    }
  }, []);

  
  const pendingItems = cartItems.map(item => ({
    name: item.name,
    amount: item.basePrice * item.quantity,
    quantity: item.quantity,
    price: item.basePrice,
    status: 'Pending'
  }));

  
  const allItems = [...purchasedItems, ...pendingItems];

  const grandTotal = allItems.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1><ShoppingBag size={32} color="#10B981" /> Buyer Dashboard</h1>
        <p>Welcome Back! What's happening with your orders</p>
      </div>

      <div className="dashboard-table">
        <table>
          <thead>
            <tr>
              <th>Items Purchased</th>
              <th>Amount</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th> 
            </tr>
          </thead>
          <tbody>
            {allItems.length > 0 ? (
              allItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>₦{item.amount.toLocaleString()}</td>
                  <td>{item.quantity}</td>
                  <td>₦{item.price.toLocaleString()}</td>
                  <td>
                    <span className={`status ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', color: '#718096' }}>
                  No items yet. <a href="/store">Start shopping</a>
                </td>
              </tr>
            )}
          </tbody>
          {allItems.length > 0 && (
            <tfoot>
              <tr>
                <td colSpan="4"><strong>Grand Total</strong></td>
                <td><strong>₦{grandTotal.toLocaleString()}</strong></td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
};

export default Dashboard;