import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext.jsx';
import '../styles/JoinUs.css';
import { Link, useNavigate } from 'react-router-dom'

const JoinUS = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email:"",
    password: "",
    role: "",
    confirmPassword: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!formData.fullName || !formData.role || !formData.email ) {
      alert("Please fill in all fields.");
      return;
    }
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Registration submitted:', formData);
      const currentFormData = { ...formData}
      const userData =  {
          id: Date.now(),
          fullname: formData.fullName.trim(),
          role: formData.role.trim(),
          email: formData.email.trim(),
          password: formData.password.trim() 
        };
      
      console.log('📤 Passing userData to OTP:', userData);

      
      const stateToPass = { 
        fullname: formData.fullName.trim(),
        role: formData.role.trim(),
        email: currentFormData.email.trim(),
        userData
      };
      navigate('/otp-verification', { 
        state: {
          email: formData.email,
          userData
       }
  });
    } catch (error) {
      console.error('Registration error:', error);
      alert('Failed to create account. Try again.');
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className='section-container'>
        <div className='form-container'>
            <div className='form-body'>
                <div className='body-header'>
                  <h3>Join Agromy Today</h3>
                  <p>Whether you are a farmer, buyer, distributor, or job seeker.</p>
                  <p>Agromy is your trusted gateway to agriculture without borders.</p>
                </div>
                {/* body content */}
                
                  <form onSubmit={handleSubmit} className="body-content">
                    <div className="form-group">
                      <h3 htmlFor="fullName">Full Name</h3>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <h3 htmlFor="role">Role</h3>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                      >
                        <option value="select">Select Option</option>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                        <option value="distributor">Distributor</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <h3 htmlFor="email">Email</h3>
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
                    <div className="form-group">
                      <h3 htmlFor="password">Password</h3>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Create a strong password"
                        minLength={6}
                      />
                    </div>
                    <div className="form-group">
                      <h3 htmlFor="confirmPassword">Confirm Password</h3>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        placeholder="Confirm your password"
                      />
                    </div>
                    <button type="submit" className="btn-acct" disabled={isLoading}>
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </button>
                    <div className="links">
                      Already have an account? <Link to="/login" >Login here</Link>
                    </div>
                  </form>
                
            </div>
        </div>
        <div className='image-container'>
          <img src='./img/workpose.png' alt="farmer carrying hoe on her shoulder and basket on the other hand" className='flip-horizontal' />
        </div>
    </div>
   
  )
}

export default JoinUS