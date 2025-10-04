import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus } from 'react-feather';
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
      quantity: 0
    },
    {
      name: 'Pepper',
      basePrice: 6500,
      unit: 'per kg',
      image: './img/pepper.jpg',
      category: 'Crops & Grains',
      available: true,
      quantity: 0
    },
    {
      name: 'Maize',
      basePrice: 5000,
      unit: 'per bag',
      image: '',
      category: 'Crops & Grains',
      available: true,
      quantity: 0
    },
    {
      name: 'Yam',
      basePrice: 50000,
      unit: 'per heap',
      image: './img/yam.jpg',
      category: 'Crops & Grains',
      available: true,
      quantity: 0
    },
    {
      name: 'Carrots',
      basePrice: 15000,
      unit: 'per basket',
      image: './img/carrot.jpg',
      category: 'Crops & Grains',
      available: true,
      quantity: 0
    },
    {
      name: 'Pumpkin Leaves',
      basePrice: 20000,
      unit: 'per bundle',
      image: '',
      category: 'Crops & Grains',
      available: true,
      quantity: 0
    }
  ]);

  const [cartCount, setCartCount] = useState(0);
  const[isOpen, setIsOpen] =useState(false);

  const handleQuantityChange = useCallback((index, delta) => {
    setProducts(prevProducts => {
      const newProducts = [...prevProducts];
      newProducts[index].quantity = Math.max(0, newProducts[index].quantity + delta);
      return newProducts;
      console.log('Increment called')
    });
  }, []);

  const addToCart = useCallback((index) => {
    const quantity = products[index].quantity;
    if (quantity > 0){
      setCartCount(prevCount => prevCount + quantity);
    window.dispatchEvent(new CustomEvent('cartUpdate', { detail: cartCount + quantity }));
    handleQuantityChange(index, -quantity);
    };
    
  }, [products, cartCount, handleQuantityChange]);

  const getTotalPrice = (basePrice, quantity, unit = 'NGN') => {
    return `${unit} ${(basePrice * quantity).toLocaleString()}`;
  };


  const storeMenu =() =>{
    setIsOpen(!isOpen)
  };
  if(isOpen){
    <div className="store-modal">
        <h2>Shopping Cart</h2>
        <p>Total Items: {cartCount}</p>
        <button onClick={storeMenu} className="close-btn">
          <ShoppingCart size={20} /> Close Cart
        </button>
      </div>
  }

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
              <p className="product-price">{getTotalPrice(product.basePrice, 1)}</p>
              <div className="quantity-control">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleQuantityChange(index, -1);
                }} 
                className="quantity-btn"
                disabled={product.quantity === 0}
              >
                <Minus size={16} />
              </button>
              <span className="quantity-value">{product.quantity}</span>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleQuantityChange(index, +1);
                }} 
                className="quantity-btn"
              >
                <Plus size={16} />
              </button>
            </div>
              <div className="product-actions">
              <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(index);
              }} 
              className="add-to-cart"
              disabled={product.quantity === 0}
            >
              Add to Cart ({product.quantity})
            </button>
            
            <p className="total">Total: {getTotalPrice(product.basePrice, product.quantity)}</p>
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