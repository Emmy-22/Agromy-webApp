import React from 'react';
import './../styles/Login.css'

const Login = () => {
  return (
<div className="login-container">
      {/* Left Side (Form) */}
      <div className="login-form">
        <img className='logo' src='../img/Agromy.png' style={{ width: "120px" }}/>
        <h2 className="welcome">Welcome back to Agromy</h2>
        <p className="subtitle">
          Your trusted digital marketplace for agriculture
        </p>

        <form>
          <div className="input-group">
            <span className='icon'><img src='../img/iconoir_at-sign.png' style={{ width: "14px", height: "14px" }}/></span>
            <input
              type="text"
              placeholder="Email Address/Phone Number"
              required
            />
          </div>

          <div className="input-group">
            <span className='icon'><img src='../img/Lock_Password_Icon_UIA.png' style={{ width: "14x", height: "14px" }}/></span>
            <input type="password" placeholder="Password" required />
          </div>

          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="signup-text">
            Don’t have an account? <a href="#">Sign Up</a>
          </p>
        </form>
      </div>

      {/* Right Side (Image) */}
      <div className="login-image">
        <img src="../img/Woman.png" alt="Smiling farmer" />
      </div>
    </div>
          );
};

export default Login;