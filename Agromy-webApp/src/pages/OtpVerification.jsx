import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "react-feather";
import { useAuth } from "../contexts/AuthContext.jsx";
import "./../styles/Otpverification.css"; 

const OtpVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, userData } = location.state || {}; 
  const { login } = useAuth();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef([]);


  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleOtpChange = (index, value) => {
    if (isNaN(value) || value.length > 1) return; 
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);


    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus(); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      alert('input the code from your email');
      return;
    }
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      console.log('OTP verified for:', email, otpCode);
      login(userData);

      setIsVerified(true);
      setTimeout(() => {
        navigate('/dashboard', { state: { message: 'Account created successfully!' } });
      }, 2000);
    } catch (error) {
      console.error('OTP verification error:', error);
      alert('Invalid OTP. Try again or resend.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('OTP resent to ' + email);
  };

  if (isVerified) {
    return (
      <div className="otp-container">
        <div className="success-message">
          <CheckCircle size={64} color="#10B981" />
          <h2>OTP Verified!</h2>
          <p>Redrecting to dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="otp-page">
    <div className="otp-container">
      <button onClick={() => navigate(-1)} className="back-btn">< ArrowLeft size={20} />Back</button>
      
      <form onSubmit={handleSubmit} className="otp-form">
        <h1>Verify OTP</h1>
        <p>Enter the 6-digit code sent to {email}</p>
        
        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="otp-input"
              autoComplete="off"
            />
          ))}
        </div>
        
        <button type="submit" className="btn-verify" disabled={isLoading || otp.join('').length !== 6}>
          {isLoading ? "Verifying..." : "Verify OTP"}
        </button>
        
        <div className="resend-section">
          <button type="button" onClick={handleResend} className="btn-resend">
            Resend OTP
          </button>
        </div>
      </form>
      <div className="agrimg">
      <img src="../img/workpose.png" alt="workpose" />
    </div>
    </div>
    
    </div>
  );
};

export default OtpVerification;