import React, { useState,useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  Menu,
  X,
  Home,
  ShoppingCart,
  HelpCircle,
  MessageSquare,
  UserPlus,
  User,
  LogIn,
  LogOut
  
} from 'react-feather';
import './Navbar.css'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  
  const [authKey, setAuthKey] = useState(user ? 'logged-in' : 'guest');
  useEffect(() => {
    const newKey = user ? 'logged-in' : 'guest';
    setAuthKey(newKey);
    console.log('🔄 Navbar auth changed to:', newKey, 'User:', user);
  }, [user]);


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

  const navItems = user ? [
    { name: 'Dashboard', icon: Home, path: '/dashboard' },
    { name: 'Store', icon: ShoppingCart, path: '/store' },
    { name: 'FAQ', icon: HelpCircle, path: '/faq' },
    { name: 'Request Product', icon: NairaIcon, path: '/request-product' },
    { name: 'Help', icon: MessageSquare, path: '/help' },
    { name: 'JoinUS', icon: UserPlus, path: '/join-us' },
    { name: 'Profile', icon: User, path: '/profiles' },
    { name: 'Cart', icon: ShoppingCart, path: '/cart' },

  ]: [ 
    { name: 'Login', icon: LogIn, path: '/login' },
    { name: 'JoinUs', icon: User, path: '/join-us' },
  ];

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false); 
  };
  return (
    <nav className="navbar" key={authKey}>
      <div className="navbar-brand">
        <span className="brand-text">Agromy</span>
      </div>
      
      
      <ul className="nav-menu desktop-menu">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.path} className="nav-link">
              <item.icon size={20} />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
        {user && (
          <li>
            <button onClick={handleLogout} className="nav-link logout">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </li>
        )}
      </ul>

      
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      
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
          {user && (
            <li>
              <button onClick={handleLogout} className="nav-link mobile-nav-link logout">
                <LogOut size={24} />
                <span>Logout</span>
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
