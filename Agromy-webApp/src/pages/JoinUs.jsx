import React, { useState } from 'react'
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

  const[isLoading, setIsLoading]= useState(false);
  const handleChange = (e)=> {
    setForm({...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if (formData.password !== formData.confirmPassword){
      alert("Password does not match");
      return;
    }
    setIsLoading(true);

    try{
      await new Promise(resolve => setTimeout(resolve,2000));
      console.log("Information submitted:", formData)
      alert("Information Submitted");
      //to know if the form submission is successful
      navigate('otp-verification', {
        state:{ email: formData.email, useData: formData }
      });
    }catch (error){
      console.error('Registration error:', error);
      alert('Account creation was not successful');
    }finally {
      setIsLoading(false)
    }
  };

  return (
    <div className='section-container'>
        <div className='form-container'>
            {/* header */}
            
            {/* body */}
            <div className='form-body'>
                {/* body header */}
                <div className='body-header'>
                  <h3>Join Agromy Today</h3>
                  <p>Whether you are a farmer, buyer, distributor, or job seeker.</p>
                  <p>Agromy is your trusted gateway to agriculture without borders.</p>
                </div>
                {/* body content */}
                <form className='body-content' onSubmit={handleSubmit}>
                    
                    <input type="text" name="fName" id="fName" placeholder='Full Name' required/>
                    <input type="email" name="email" id="email" placeholder='Email' required />
                    <input type="text" name='role' id='role'  placeholder='Select Role:(Farmer, Buyer, Distributor or Job Seeker)' />
                    <input type="password" name="password" id="password" required placeholder='Create Password' />
                    <input type="password" name="c_password" id="c_password" required placeholder='Confirm Password' />
                    <button  type="submit" className='btn-acct' disabled={isLoading}> {isLoading ? "Creating Account...": "Create Account"}</button>
                 
                 </form>
          
                <div className='form-footer'>
                    <p>Already have an account?<span className='log-in'><Link to="/login" className="log-in">Log In</Link></span></p>
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