// Dependencies
import React from 'react';
import Subtotal from '../cart/Subtotal';
import advertisement from '../../images/ads/ocean-credit-card.jpg';

// Styles
import '../../styles/cart/Checkout.css';

export default function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img
          className='checkout-ad'
          src={advertisement}
          alt='Ocean Credit Card Ad'
        />
        <div>
          <h2 className='checkout-title'>
            Your Shopping Cart
          </h2>
        </div>
      </div>

      <div className='checkout-right'>
        <Subtotal />
      </div>
    </div>
  )
};