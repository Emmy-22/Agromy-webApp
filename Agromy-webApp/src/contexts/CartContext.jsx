import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('agromy-cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('agromy-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (newItem) => {
    if (newItem.quantity > 0) {
      setCartItems(prev => {
        const existingIndex = prev.findIndex(item => item.name === newItem.name);
        if (existingIndex > -1) {
          const updated = [...prev];
          updated[existingIndex].quantity += newItem.quantity;
          return updated;
        } else {
          return [...prev, newItem];
        }
      });
    }
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const getTotal = () => cartItems.reduce((total, item) => total + (item.basePrice * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      updateQuantity, 
      removeItem, 
      clearCart, 
      getTotal 
    }}>
      {children}
    </CartContext.Provider>
  );
};