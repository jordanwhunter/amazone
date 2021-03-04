// Dependencies
import React, { useState, useRef } from 'react';
import { useStateIfMounted } from 'use-state-if-mounted';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import amazone from '../../images/logo/amazone-bw.png';

// Styles
import '../../styles/authentication/ForgotPassword.css';

export default function ForgotPassword() {
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  
  const [loading, setLoading] = useStateIfMounted(false);
  
  const emailRef = useRef();

  const { resetPassword } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Success - check your inbox')
    } catch {
      setError('Email not registered')
    }
    setLoading(false)
  };

  return (
    <div className='forgot-password'>
      <Link to='/'>
        <img
          className='forgot-password-logo'
          src={amazone}
          alt='Amazone Logo' 
        />
      </Link>
      <div className='forgot-password-container'>
        <h1>Reset Password</h1>
        {message && <h4 className='confirm-message'>{message}</h4>}
        {error && <h4 className='error-message'>{error}</h4>}
        <form>
          <h5>Email</h5>
          <input
            type='email'
            ref={emailRef}
            required
          />
          <button
            className='forgot-password-button'
            disabled={loading}
            type='submit'
            onClick={handleSubmit}
          >
            Send instructions
          </button>
        </form>
        <p className='login-link'>
          <Link 
            to='/login'
            className='redirect-to-login'
          >
            Login
          </Link>
        </p>
      </div>
      <p className='redirect-to-signup'>
        Don't have an account? <Link 
          to='/signup'
          className='signup-redirect'
        >
          Sign Up
        </Link>
      </p>
    </div>
  )
};