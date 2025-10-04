import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  ShoppingCart, 
  HelpCircle, 
  MessageSquare 
} from 'react-feather';
import './Navbar.css'; // We'll define the CSS in a separate file

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Custom Naira icon component to replace DollarSign
  const NairaIcon = ({ size = 20 }) => (
    <span 
      style={{ 
        fontSize: size, 
        lineHeight: 1, 
        fontWeight: 500,
        display: 'inline-block',
        width: size,
        height: size,
        textAlign: 'center'
      }}
    >
      ₦
    </span>
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Dashboard', icon: Home, path: '/dashboard' },
    { name: 'Store', icon: ShoppingCart, path: '/store' },
    { name: 'FAQ', icon: HelpCircle, path: '/faq' },
    { name: 'Request Product', icon: NairaIcon, path: '/request-product' },
    { name: 'Help', icon: MessageSquare, path: '/help' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-text">Agromy</span>
      </div>
      
      {/* Desktop Menu */}
      <ul className="nav-menu desktop-menu">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.path} className="nav-link">
              <item.icon size={20} />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="nav-menu mobile-menu">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.path} className="nav-link mobile-nav-link" onClick={toggleMobileMenu}>
                <item.icon size={24} />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;