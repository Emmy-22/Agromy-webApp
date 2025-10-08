import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import './../styles/Login.css'

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(""); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('📝 Form submitted! Data:', formData);
    setIsLoading(true);
    setError("");

    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      console.log('Login submitted:', formData);
      alert('✅ Login success - calling login');

      
      const userData = { id: Date.now(), email: formData.email };
      login(userData);
      
      
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError("Invalid credentials. Try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login-container">
      
      <div className="login-form">
        <img className='logo' src='../img/Agromy.png' style={{ width: "120px" }}/>
        <h2 className="welcome">Welcome back to Agromy</h2>
        <p className="subtitle">
          Your trusted digital marketplace for agriculture
        </p>

        <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <span className='icon'><img src='../img/iconoir_at-sign.png' style={{ width: "14px", height: "14px" }}/></span>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@domain.com"
              />
          </div>
          <div className="input-group">
              <span className='icon'><img src='../img/Lock_Password_Icon_UIA.png' style={{ width: "14x", height: "14px" }}/></span>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? "Logging In..." : "Login"}
            </button>
              <div className="links">
                    <Link to="/forgot-password" className="forgot">Forgot Password?</Link> | 
                    <Link to="/join-us" className="sign-up">Create Account</Link>
              </div>
        </form>
     </div>
      <div className="login-image">
        <img src="../img/workpose.png" alt="workpose" />
        </div>

    </div>
  );
};

export default Login;