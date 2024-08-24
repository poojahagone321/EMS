import React from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate();
  
    const handleSignIN = () => {
        navigate("/SignIn");
      };
  
    return (
        <div className='Components'>
        <div className='img'>
       
          <img src="src/Images/Img2-removebg-preview (1).png" alt="" />
    
        </div>
        <div className='SignIn'>
       
          <form action="">
            <center>
            <button type='button' className='btn1'  onClick={handleSignIN}  >Sign In</button>  <button className='btn2'>Sign Up</button>
            <div >
                <input className='Input' placeholder='Enter Your First Name' type='text' />
    
            </div>
            <div >
                <input className='Input' placeholder='Enter Your Last Name' type="text" />
    
            </div>
            <div >
                <input className='Input' placeholder='Email ID' type="email" />
    
            </div>
            <div > 
                <input className='Input' placeholder='Password' type="password" />
            </div>
          
            <div >
                <button className='btn'>Sign Up</button>
            </div>
            <div className='checkbox'>
              <p>Already have an Account? Sign In</p> 
              
            </div>
            </center>
          </form>
        </div>
        </div>
      )
}

export default SignUp
