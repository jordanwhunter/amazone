// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../contexts/StateContext';
import Header from '../main/Header';
import CheckoutProduct from '../cart/CheckoutProduct';

// Styles
import '../../styles/processing/Payment.css';

export default function Payment() {
  const [{ cart, user }] = useStateValue();
  
  return (
    <>
      <Header />
      <div className='payment'>
        <div className='payment-container'>
          <h1>
            Checkout (
              <Link to='/checkout'>
                {cart?.length} Items
              </Link>
            )
          </h1>

          {/* Payment section - delivery address */}
          <div className='payment-section'>
            <div className='payment-title'>
              <h3>Delivery Address: </h3>
            </div>
            <div className='payment-address'>
              <p>{user.email}</p>
              <p>777 Test Address</p>
              <p>New York, NY 10109</p>
            </div>
          </div>

          {/* Payment section - review items */}
          <div className='payment-section'>
            <div className='payment-title'>
              <h3>Review Items and Delivery: </h3>
            </div>
            <div className='payment-items'>
              { 
                cart.map(item => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating} 
                  />
                ))
              }
            </div>
          </div>

          {/* Payment section - payment method */}
          <div className='payment-section'>
            <div className='payment-title'>
              <h3>Payment Method: </h3>
            </div>
            <div className='payment-details'>
              {/* Stripe integration */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};