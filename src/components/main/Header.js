// Dependencies
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../contexts/StateContext';
import { useAuth } from '../../contexts/AuthContext';
import { auth } from '../../firebase';
import amazone from '../../images/logo/amazone-white.png';

// Icons
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// Styles
import '../../styles/main/Header.css';

export default function Header() {
  const [error, setError] = useState('');

  const [{ cart, user }, dispatch] = useStateValue();
  const { logout } = useAuth();

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

  const logUser = () => {
    if (user) {
      return (
        <button
          className='logout-button' 
          variant='link'
          onClick={handleLogout}
        >
          Log Out
        </button>
      )
    } else {
      return (
        <Link 
          to='/login'
          style={{
            textDecoration: 'none',
            color: 'white'
          }}
        >
          Log In
        </Link>
      )
    }
  };

  const authedUser = logUser();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])

  return (
    <div className='header'>
      <Link to='/'>
        {/* Logo */}
        <img 
          className='header-logo'
          src={amazone} 
          alt='Amazone'
        />
      </Link>

      {/* Search box */}
      <div className='header-search'>
        <input 
          className='header-search-input'
          type='text'
        />
        <SearchIcon className='header-search-icon' />
      </div>

      {/* Children */}
      <div className='header-nav'>
        
        <div className='header-option'>
          {/* Hello / Sign In */}
          <span className='header-option-line-one'>Hello</span>
          <span className='header-option-line-two'>{authedUser}</span>
        </div>
        
        <div className='header-option'>
          {/* Returns & Orders */}
          <span className='header-option-line-one'>Returns</span>
          <span className='header-option-line-two'>& Orders</span>
        </div>
        <Link 
          to='/your-prime'
          style={{
            textDecoration: 'none',
            color: 'white'
          }}
        >
          <div className='header-option'>
            {/* Your Prime */}
            <span className='header-option-line-one your-prime'>Your</span>
            <span className='header-option-line-two your-prime'>Prime</span>
          </div>
        </Link>
        
        <Link 
          to='/checkout'
          style={{
            textDecoration: 'none',
            color: 'white'
          }}
        >
          <div className='header-option-cart'>
            {/* Cart */}
            <ShoppingCartIcon />
            <span className='header-option-line-two header-cart-count'>
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
};