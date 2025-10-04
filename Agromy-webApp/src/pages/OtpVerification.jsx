import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import '../styles/Otpverification.css'

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    let countdown;
    if (timer > 0 && resendDisabled) {
      countdown = setInterval(() => setTimer(prev => prev - 1), 1000);
    } else if (timer === 0) {
      setResendDisabled(false);
    }
    return () => clearInterval(countdown);
  }, [timer, resendDisabled]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^[a-zA-Z0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }

      // Verify OTP (example logic - replace with your backend call)
      if (newOtp.every(digit => digit) && newOtp.join('').toLowerCase() === 'abc12') {
        alert('Verification successful!');
      }
    }
  };

  const resendCode = () => {
    setResendDisabled(true);
    setTimer(60);
    alert('A new code has been sent to your email.');
    // Add your resend API call here
  };

  return (
    <div className="otp-container">
      <div className="sect-container">
      <h1 className="otp-logo">Agromy</h1>
      <div className="verification-box">
        <h2 className="title">Verify Your Email</h2>
        <p className="subtitle">Enter the 6-character code sent to your email</p>
        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => (inputRefs.current[index] = el)}
              type="text"
              className="otp-input"
              maxLength="1"
              value={digit}
              onChange={e => handleOtpChange(e, index)}
              autoFocus={index === 0}
            />
          ))}
        </div>
        <div className="resend-section">
          <button
            onClick={resendCode}
            disabled={resendDisabled}
            className={`resend-btn ${resendDisabled ? 'disabled' : ''}`}
          >
            {resendDisabled ? `Resend in ${timer}s` : "Didn't receive the code? Resend"}
          </button>
        </div>
      </div>
      </div>
      <div className="agrimg">
        <img src="./img/workpose.png" alt="workpose" />
      </div>
    </div>
  );
};

export default OtpVerification;