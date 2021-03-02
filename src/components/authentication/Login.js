// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import amazone from '../../images/logo/amazone.png';

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
      
    </div>
  )
};