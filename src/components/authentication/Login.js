// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import amazone from '../../images/logo/amazone-bw.png';

// Styles
import '../../styles/authentication/Login.css';

export default function Login() {
  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login-logo'
          src={amazone}
          alt='Amazone Logo' 
        />
      </Link>
      
      <div className='login-container'>
        <h1>Log In</h1>
        <form>
          <h5>Email</h5>
          <input type='text'/>

          <h5>Password</h5>
          <input type='password'/>

          <button className='login-button'>Log In</button>
        </form>

        <p>
          By logging in, you agree to Amazone's Conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
        </p>

        <button className='register-button'>Create Your Amazone Account</button>
      </div>
    </div>
  )
};