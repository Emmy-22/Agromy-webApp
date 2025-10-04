import React from 'react'
import '../styles/JoinUs.css';

const JoinUS = () => {
  return (
    <div className='section-container'>
        <div className='form-container'>
            {/* header */}
            <div className='form-header'>
              <a href="" className='form-logo'>Agromy</a>
              <p className='header-p'>Revolutionizing Agriculture</p>
            </div>
            {/* body */}
            <div className='form-body'>
                {/* body header */}
                <div className='body-header'>
                  <h3>Join Agromy Today</h3>
                  <p>Whether you are a farmer, buyer, distributor, or job seeker.</p>
                  <p>Agromy is your trusted gateway to agriculture without borders.</p>
                </div>
                {/* body content */}
                <div className='body-content'>
                    <input type="text" name="fName" id="fName" placeholder='Full Name' />
                    <input type="email" name="email" id="email" placeholder='Email' />
                    <input type="text" name='role' id='role'  placeholder='Select Role:(Farmer, Buyer, Distributor or Job Seeker)' />
                    <input type="password" name="password" id="password"  placeholder='Create Password' />
                    <input type="c_password" name="c_password" id="c_password" placeholder='Confirm Password' />
                    <button className='btn-acct'>Create Account</button>
                </div>
                {/* footer */}
                <div className='form-footer'>
                    <p>Have an account?<span className='log-in'> Log In</span></p>
                </div>
            </div>
        </div>
        <div className='image-container'>
          <img src="src\assets\portrait-countryside-worker-posing.png" alt="farmer carrying hoe on her shoulder and basket on the other hand" className='flip-horizontal' />
        </div>
    </div>
   
  )
}

export default JoinUS