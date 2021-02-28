// Dependencies
import React from 'react';
import ad from '../../images/ads/ocean-credit-card.jpg';

// Styles
import '../../styles/cart/Checkout.css';

export default function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img
          className='checkout-ad'
          src={ad}
          alt='Ocean Credit Card Ad'
        />
      </div>
      <div className='checkout-right'>

      </div>
    </div>
  )
};