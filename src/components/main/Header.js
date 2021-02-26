// Dependencies
import React from 'react';
import amazone from '../../images/amazone.png';

// Styles
import '../../styles/main/Header.css';

// Icons
import SearchIcon from '@material-ui/icons/Search';

export default function Header() {
  return (
    <div className='header'>
      {/* Logo */}
      <img 
        className='header-logo'
        src={amazone} 
        alt='Amazone'
      />

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
          <span className='header-option-line-two'>Sign in</span>
        </div>
        <div className='header-option'>
          {/* Returns & Orders */}
          <span className='header-option-line-one'>Returns</span>
          <span className='header-option-line-two'>& Orders</span>
        </div>
        <div className='header-option'>
          {/* Your Prime */}
          <span className='header-option-line-one'>Your</span>
          <span className='header-option-line-two'>Prime</span>
        </div>
      </div>
    </div>
  )
};