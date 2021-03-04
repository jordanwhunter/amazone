// Dependencies
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateIfMounted } from 'use-state-if-mounted';
import { useAuth } from '../../contexts/AuthContext';
import amazone from '../../images/logo/amazone-bw.png';

// Styles
import '../../styles/authentication/Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [loading, setLoading] = useStateIfMounted(false);

  const history = useHistory();

  const { login } = useAuth();

  const logIn = async event => {
    event.preventDefault();

    if (email === '' && password === '') {
      return setError('Valid email & password required')
    } else if (email === '') {
      return setError('Please include valid email')
    } else if (password === '') {
      return setError('Password input required')
    }

    try {
      setError('')
      setLoading(true)
      await login(email, password)
      history.push('/')
      console.log('Logged in successfully')
    } catch {
      setError('Unable to log in')
      console.log(error)
    }
    setLoading(false)
  };

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
        {error && <h4 className='error-message'>{error}</h4>}
        <form>
          <h5>Email</h5>
          <input 
            type='email'
            value={email}
            required
            onChange={
              event => setEmail(event.target.value)
            }
          />

          <h5>Password</h5>
          <input 
            type='password'
            value={password}
            required
            onChange={
              event => setPassword(event.target.value)
            }
          />

          <button 
            className='login-button'
            disabled={loading}
            type='submit'
            onClick={logIn}
          >
            Log In
          </button>
        </form>
        <p className='forgot-password-link'>
          <Link 
            to='/forgot-password'
            className='redirect-forgot-password'
          >
            Forgot password?
          </Link>
        </p>
        <p>
          By logging in, you acknowledge that the Amazone platform is for demoing purposes only and not a legitimate online retailer. The items depicted are not for sale. Please do not share any sensitive credit card or residence information when demoing the platform's payment processing functionality.
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