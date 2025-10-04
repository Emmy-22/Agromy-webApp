import React from 'react';
import '../styles/Help.css';

const Help = () => {
  return (
    <div className="help-container">
      <header className="help-header">
        <h1 className="help-logo">Agromy Help</h1>
        <p>Get support and assistance here.</p>
      </header>
      <main className="help-main">
        <div className="customer">
        <h3>Our Valued Customer </h3>
        <p>Our agents and service support are ready to engage you<br/> and help you with any issues you might be challenged with.</p>
        </div>
        <div className='customer'>
          <h3>For partnership and supports</h3>
          <p>Reach out to us through our email</p>
          <p><a href="AgromyNG@gmail.com">AgromyNG@gmail.com</a></p>
        </div>
      </main>
    </div>
  );
};

export default Help;