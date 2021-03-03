// Dependencies
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import amazone from '../../images/logo/amazone-bw.png';

// Styles
import '../../styles/authentication/YourPrime.css';

export default function YourPrime() {
  const [error, setError] = useState();
  
  const { currentUser, logout } = useAuth();

  const history = useHistory();

  const handleLogout = async () => {
    setError('')
    try {
      await logout()
      history.push('/')
      console.log('Logged out successfully')
    } catch {
      setError('Failure logging out')
      console.warn(error)
    }
  };

  return (
    <div className='your-prime-div'>
      <Link to='/'>
        <img
          className='your-prime-logo'
          src={amazone}
          alt='Amazone Logo'
        />
      </Link>

      <div className='your-prime-container'>
        <h1>Profile</h1>
        {error && <h4 className='error-message'>{error}</h4>}
        <h4><strong>Email: </strong>{currentUser?.email}</h4>
        <Link to='/update-profile'>
          <button
            className='update-profile-button'
          >
            Update profile
          </button>
        </Link>
      </div>

      <Link 
        to='/'
        className='redirect-to-main'
      > 
        Main Page
      </Link>
      <button
        className='profile-logout-button' 
        variant='link'
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  )
};