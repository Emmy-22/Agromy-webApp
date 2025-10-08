import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Plus, Minus } from 'react-feather';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Store.css';

const Store = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Plantain',
      basePrice: 13000,
      unit: 'per bunch',
      image: './img/planatain.jpg',
      category: 'Crops & Grains',
      available: true,
      quantity: 0
    },
    {
      id: 2,
      name: 'Pepper',
      basePrice: 6500,
      unit: 'per kg',
      image: './img/pepper.jpeg',
      category: 'Crops & Grains',
      available: true,
      quantity: 0
    },
    {
      id: 3,
      name: 'Maize',
      basePrice: 5000,
      unit: 'per bag',
      image: './img/maize.png',
      category: 'Crops & Grains',
      available: true,
      quantity: 0
    },
    {
      id: 4,
      name: 'Yam',
      basePrice: 50000,
      unit: 'per heap',
      image: './img/yam.jpg',
      category: 'Crops & Grains',
      available: true,
      quantity: 0
    },
    {
      id: 5,
      name: 'Carrots',
      basePrice: 15000,
      unit: 'per basket',
      image: './img/carrot.jpg',
      category: 'Crops & Grains',
      available: true,
      quantity: 0
    },
    {
      id: 6,
      name: 'Pumpkin Leaves',
      basePrice: 20000,
      unit: 'per bundle',
      image: './img/pumpkin.jpg',
      category: 'Crops & Grains',
      available: true,
      quantity: 0
    }
  ]);
  const [localQtys, setLocalQtys] = useState({}); 
  const [isOpen, setIsOpen] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (index, delta) => {
    const product = products[index];
    const newQty = Math.max(0, (localQtys[product.id] || product.quantity) + delta);
    
    
    setLocalQtys(prev => ({ ...prev, [product.id]: newQty }));
    
   
    setProducts(prevProducts => {
      const newProducts = [...prevProducts];
      newProducts[index].quantity = newQty;
      return newProducts;
    });
  };

  const addToCartLocal = (index) => {
    const product = products[index];
    const quantity = localQtys[product.id] || product.quantity; 
    if (quantity > 0 && product.available) {
      const itemToAdd = {
        id: Date.now() + Math.random(),
        name: product.name,
        basePrice: product.basePrice,
        unit: product.unit,
        image: product.image,
        category: product.category,
        quantity: quantity
      };
      addToCart(itemToAdd);
      
      
      setLocalQtys(prev => ({ ...prev, [product.id]: 0 }));
      
      // Sync global reset
      setProducts(prevProducts => {
        const newProducts = [...prevProducts];
        newProducts[index].quantity = 0;
        return newProducts;
      });
      
      console.log('🛒 Added & reset to 0:', itemToAdd);
    } else if (!product.available) {
      alert(`${product.name} is currently unavailable.`);
    }
  };

  const getTotalPrice = (basePrice, quantity, unit = 'NGN') => {
    return `${unit} ${(basePrice * quantity).toLocaleString()}`;
  };

  const storeMenu = () => {
    navigate('/cart'); 
  };

  

  return (
 
      <div className="store-container">
        <div className="store-actions">
          <select className="location-select" defaultValue="">
            <option>Location</option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Kano</option>
            <option>Rivers</option>
            <option>Ogun</option>
            <option>Oyo</option>
            <option>Ondo</option>
          </select>
          <Link to="/cancel-order" className="cancel">Cancel order</Link>
         <button onClick={storeMenu} className="cart-toggle">
 
            <ShoppingCart size={18} /> Cart
         </button>
      </div>
      
      <div className="product-list">
        {products.map((product, index) => {
          const currentQty = localQtys[product.id] || product.quantity; 
          return (
            <div key={product.id} className="product-card">
              <img 
                src={product.image } 
                alt={product.name} 
                className="product-image"
                onError={(e) => { e.target.src = '#'; }}
              />
              <div className="product-name">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <p className="product-price">{getTotalPrice(product.basePrice, 1)} {product.unit}</p>
              </div>
              
              {product.available ? (
                <>
                  <div className="quantity-control">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleQuantityChange(index, -1);
                      }} 
                      className="qty-btn minus"
                      disabled={currentQty === 0}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="qty-display">{currentQty}</span>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleQuantityChange(index, +1);
                      }} 
                      className="qty-btn plus"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCartLocal(index);
                    }} 
                    className="add-to-cart"
                    disabled={currentQty === 0}
                  >
                    Add to Cart ({currentQty})
                  </button>
                  
                  <p className="total">Total: {getTotalPrice(product.basePrice, currentQty)} {product.unit}</p>
                </>
              ) : (
                <button className="unavailable-btn" disabled>
                  Out of Stock
                </button>
              )}
              <div className="payment">
                   <Link to="/Payment" className="payment-btn" onClick={storeMenu}>Proceed with payment</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
   
  );
};

export default Store;