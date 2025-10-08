import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('agromy-user');
      if (savedUser && savedUser !== 'undefined' && savedUser !== 'null') {
        const parsed = JSON.parse(savedUser); {
        setUser(parsed);
        }
      }
    } catch (error) {
      console.error('Invalid user data in localStorage:', error);
      localStorage.removeItem('agromy-user'); 
    } finally {
      setLoading(false);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('agromy-user', JSON.stringify(userData));
    console.log('✅ Auth login called:', userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('agromy-user');
    console.log('🔓 Logged out');
  };

  const value = { user, login, logout, loading };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};