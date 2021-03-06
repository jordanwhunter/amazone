// Dependencies
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import axios from '../../axios';
import { useStateValue } from '../../contexts/StateContext';
import { getCartTotal } from '../../reducer';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { db } from '../../firebase';
import Header from '../main/Header';
import CheckoutProduct from '../cart/CheckoutProduct';

// Styles
import '../../styles/processing/Payment.css';

export default function Payment() {
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const [{ cart, user }, dispatch] = useStateValue();

  const history = useHistory();

  const stripe = useStripe();

  const elements = useElements();
  
  const clearCart = () => {
    dispatch({
      type: 'EMPTY_CART'
    });
  };

  useEffect(() => {
    // Customer secret needs to be provided by Stripe which allows us to charge user
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        // Stripe expects the total in a currency sub-unit (hence the '* 100')
        url: `/payments/create?total=${getCartTotal(cart) * 100}`
      });
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  }, [cart]);

  console.log('Secret: ', clientSecret)

  const handleSubmit = async event => {
    event.preventDefault();

    setProcessing(true);

    await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      } 
    }).then(({ paymentIntent }) => { 
      // paymentIntent = payment confirmation
      
      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          cart: cart,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })
        
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      
      clearCart();

      history.replace('/orders');
    })
  };

  const handleChange = event => {
    // Listen for changes in CardElement
    // Display errors as the user inputs details
    setDisabled(event.empty);
    setError(
      event.error
        ? event.error.message
        : ''
    );
  };

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
              <h3>Review Items: </h3>
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
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>
                <div className='payment-price-container'>
                  <CurrencyFormat
                    // value acts as a render prop
                    renderText={(value) => (
                      <h3>Order Total: {value}</h3>
                    )}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>
                      {
                        processing 
                          ? <p>Processing...</p>
                          : 'Buy Now'
                      }
                    </span>
                  </button>
                </div>

                {/* Errors */}
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};