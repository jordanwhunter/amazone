// Dependencies
import React from 'react';
import { useStateValue } from '../../contexts/StateContext';
import Subtotal from '../cart/Subtotal';
import CheckoutProduct from './CheckoutProduct';
import advertisement from '../../images/ads/ocean-credit-card.jpg';

// Styles
import '../../styles/cart/Checkout.css';

export default function Checkout() {
  const [{ cart }] = useStateValue();

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
          {cart.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className='checkout-right'>
        <Subtotal />
      </div>
    </div>
  )
};