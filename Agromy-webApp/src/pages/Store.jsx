import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Store.css';

const Store = () => {
  const [products, setProducts] = useState([
    {
      name: 'Plantain',
      basePrice: 13000,
      unit: 'per bunch',
      image: './img/planatain.jpg',
      category: 'Crops & Grains',
      available: true,
      quantity: 1
    },
    {
      name: 'Pepper',
      basePrice: 6500,
      unit: 'per kg',
      image: './img/pepper.jpg',
      category: 'Crops & Grains',
      available: true,
      quantity: 1
    },
    {
      name: 'Maize',
      basePrice: 5000,
      unit: 'per bag',
      image: 'https://via.placeholder.com/200x150?text=Maize',
      category: 'Crops & Grains',
      available: true,
      quantity: 1
    },
    {
      name: 'Yam',
      basePrice: 50000,
      unit: 'per heap',
      image: './img/yam.jpg',
      category: 'Crops & Grains',
      available: true,
      quantity: 1
    },
    {
      name: 'Carrots',
      basePrice: 15000,
      unit: 'per basket',
      image: './img/carrot.jpg',
      category: 'Crops & Grains',
      available: true,
      quantity: 1
    },
    {
      name: 'Pumpkin Leaves',
      basePrice: 20000,
      unit: 'per bundle',
      image: 'https://via.placeholder.com/200x150?text=Pumpkin+Leaves',
      category: 'Crops & Grains',
      available: true,
      quantity: 1
    }
  ]);

  const [cartCount, setCartCount] = useState(0);

  const handleQuantityChange = (index, delta) => {
    setProducts(prevProducts => {
      const newProducts = [...prevProducts];
      newProducts[index].quantity = Math.max(0, newProducts[index].quantity + delta);
      return newProducts;
    });
  };

  const addToCart = (index) => {
    const quantity = products[index].quantity;
    setCartCount(prevCount => prevCount + quantity);
    window.dispatchEvent(new CustomEvent('cartUpdate', { detail: cartCount + quantity }));
  };

  const getTotalPrice = (basePrice, quantity, unit) => {
    return `N${(basePrice * quantity).toLocaleString()} ${unit}`;
  };
  const storeMenu =() =>{
    setIsOpen(!isOpen)
  };

  return (

      <div className="store-container">
        <div className="store-actions">
          <select className="action-btn location-select">
            <option>Choose drop location</option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Kano</option>
          </select>
          <Link to="/cancel-order" className="action-btn cancel">Cancel order</Link>
        </div>
        <h2 className="store-title">Products</h2>
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="availability">{product.available ? 'Available' : 'Out of Stock'}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{getTotalPrice(product.basePrice, product.quantity, product.unit)}</p>
              <div className="quantity-control">
                <button className="quantity-btn" onClick={() => handleQuantityChange(index, -1)}>-</button>
                <span className="quantity-value">{product.quantity}</span>
                <button className="quantity-btn" onClick={() => handleQuantityChange(index, 1)}>+</button>
              </div>
              <div className="product-actions">
              <button className="add-to-cart" onClick={() => addToCart(index)}>Add to cart</button>
              </div>
              <div className="payment">
                   <Link to="/Payment" className="payment-btn" onClick={storeMenu}>Proceed with payment</Link>
               </div>
            </div>
            
          ))}
          
        </div>
        
      </div>
   
  );
};

export default Store;