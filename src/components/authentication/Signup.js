// Dependencies
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateIfMounted } from 'use-state-if-mounted';
import { useAuth } from '../../contexts/AuthContext';
import amazone from '../../images/logo/amazone-bw.png';

// Styles
import '../../styles/authentication/Signup.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [error, setError] = useState('');

  const [loading, setLoading] = useStateIfMounted(false);

  const history = useHistory();

  const { signup } = useAuth();

  const register = async event => {
    event.preventDefault();
    
    if (password !== confirmedPassword) {
      return setError('Passwords must match')
    } else if (email === '') {
      return setError('Please include valid email')
    }

    try {
      setError('')
      setLoading(true)
      await signup(email, password)
      history.push('/')
      console.log('Account created successfully')
    } catch {
      setError('Unable to create account')
      console.log(error)
    }
    setLoading(false)
  };

  return (
    <div className='signup'>
      <Link to='/'>
        <img
          className='signup-logo'
          src={amazone}
          alt='Amazone Logo' 
        />
      </Link>
      
      <div className='signup-container'>
        <h1>Sign Up</h1>
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

          <h5>Confirm Password</h5>
          <input 
            type='password'
            value={confirmedPassword}
            required
            onChange={
              event => setConfirmedPassword(event.target.value)
            }
          />

          <button 
            className='signup-button'
            disabled={loading}
            type='submit'
            onClick={register}
          >
            Create Account
          </button>
        </form>

        <p>
          By signing up, you acknowledge that the Amazone platform is for demoing purposes only and not a legitimate online retailer. The items depicted are not for sale. Please do not share any sensitive credit card or residence information when demoing the platform's payment processing functionality.
        </p>
      </div>
      <p className='redirect-to-login'>
        Already have an account? <Link 
          to='/login'
          className='login-redirect'
        >
          Log In
        </Link>
      </p>
    </div>
  )
};